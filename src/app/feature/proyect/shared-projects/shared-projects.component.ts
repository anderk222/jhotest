import { Component } from '@angular/core';
import { LoadStatus } from '@jhotest/model/LoadSatus';
import { ProjectService } from '../services/project.service';
import { AuthService } from '@jhotest/auth/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '@jhotest/store/modal.service';
import { Pagination, initializePagination, optsearch } from '@jhotest/model/pagination';
import { Project } from '../model/project';

@Component({
  selector: 'jhotest-shared-projects',
  templateUrl: './shared-projects.component.html',
  styleUrls: ['./shared-projects.component.css']
})
export class SharedProjectsComponent {


  constructor(
    private projectService: ProjectService,
    private auth: AuthService,
    private snackbar: MatSnackBar,
    private routed: ActivatedRoute,
    public modal: ModalService

  ) { }

  pagination : Pagination<Project> = initializePagination();

  status: LoadStatus = 'OK';

  ngOnInit(): void {

    this.routed.queryParams.subscribe(params => {

      this.getSharedProjects({
        value: params['value'] || '',
        page: params['page'] || 0,
        limit: params['limit'] || 10
      })
    });

  }

  private getSharedProjects(opt: optsearch) {

    this.status = 'LOAD';

    this.projectService.getSharedProjects(this.auth.userId, opt).subscribe({

      next: (res) => {
        this.pagination = res;
        
        this.status = res.totalItems > 0 ? 'OK' : 'NOTHING';
      },
      error: (err) => {
        this.snackbar.open(JSON.stringify(err));
        this.status = 'OK';
      }
    });
  }

  // handlerRemove(id: number) {

  //   let ref = this.dialog.open(DialogComponent, {
  //     data: {
  //       title: 'Eliminar proyecto',

  //       message: `
  //       Realmenete desea eliminar 
  //       este proyecto? 
  //       Al hacerlo se eliminara para siempre
  //       `
  //     }
  //   });

  //   ref.afterClosed().subscribe((res => {

  //     if (res) this.deleteProject(id)

  //   }))

  // }





}
