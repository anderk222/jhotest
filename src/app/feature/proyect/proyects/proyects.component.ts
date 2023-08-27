import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { AuthService } from '@jhotest/auth/auth.service';
import { optsearch } from '@jhotest/model/pagination';
import { ProjectStoreService } from '../services/project-store.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router';
import { LoadStatus } from '@jhotest/model/LoadSatus';
import { DialogComponent } from '@jhotest/shared/dialog/dialog/dialog.component';
import { ModalService } from '@jhotest/store/modal.service';


@Component({
  selector: 'jhotest-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    public store: ProjectStoreService,
    private auth: AuthService,
    private snackbar: MatSnackBar,
    private routed: ActivatedRoute,
    private dialog: MatDialog,
    public modal : ModalService

  ) { }

  status: LoadStatus = 'OK';

  ngOnInit(): void {

    this.routed.queryParams.subscribe(params => {

      this.search({
        value: params['value'] || '',
        page: params['page'] || 0,
        limit: params['limit'] || 10
      })
    });


  }


  private search(opt: optsearch) {

    this.status = 'LOAD';

    this.projectService.search(this.auth.userId, opt).subscribe({

      next: (res) => {
        this.store.pagination = res;
        this.status = 'OK';
      },
      error: (err) => {
        this.snackbar.open(JSON.stringify(err));
        this.status = 'OK';
      }
    });
  }

  handlerRemove(id: number) {

    let ref = this.dialog.open(DialogComponent, {
      data: {
        title: 'Eliminar proyecto',

        message: `
        Realmenete desea eliminar 
        este proyecto? 
        Al hacerlo se eliminara para siempre
        `
      }
    });

    ref.afterClosed().subscribe((res => {

      if (res) this.deleteProject(id)

    }))

  }

  private deleteProject(id: number) {

    this.projectService.delete(id).subscribe({

      next: (_) => this.store.removeItem(id),
      error: (err) => this.snackbar.open(JSON.stringify(err))

    });
  }

}