import { Component, Input, OnChanges, OnInit, importProvidersFrom } from '@angular/core';
import { CardCheckListComponent } from '../card-check-list/card-check-list.component';
import { CheckListStoreService } from '@jhotest/feature/check-list/services/check-list-store.service';
import { CheckListService } from '@jhotest/feature/check-list/services/check-list.service';
import { Pageable } from '@jhotest/model/pagination';
import { ActivatedRoute } from '@angular/router';
import { LoadStatus } from '../../../model/LoadSatus';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogSharedModule } from '@jhotest/shared/dialog/dialog-shared.module';
import { DialogComponent } from '@jhotest/shared/dialog/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import JhotestResponse from '@jhotest/util/Response';
import { LoadingTableComponent } from '@jhotest/shared/load/loading-table/loading-table.component';

@Component({
  selector: 'jhotest-check-list-list',
  templateUrl: './check-list-list.component.html',
  styleUrls: ['./check-list-list.component.css'],
  imports: [
    CardCheckListComponent,
    MatSnackBarModule,
    DialogModule,
    DialogSharedModule,
    CommonModule,
    LoadingTableComponent
  ],
  standalone: true,
  providers: [
  ]
})
export class CheckListListComponent implements OnChanges {

  constructor(
    public store: CheckListStoreService,
    private service: CheckListService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) { }


  @Input() project = 0;
  status: LoadStatus = 'OK';

  ngOnChanges(): void {

    this.route.queryParams.subscribe(params => {

      this.projection({
        page: params['page'] || 0,
        limit: params['limit'] || '10'
      })

    });

    // suscribe when another component add a project 
    this.store.addition.subscribe(() => this.handleAddToStore());
  };

  projection(opt: Pageable) {

    this.status = 'LOAD';

    this.service.projection(this.project, opt).subscribe({

      next: (res) => {
        this.store.pagination = res;
        this.status = res.totalItems > 0 ? 'OK' : 'NOTHING';
      },
      error: (err) => {
        this.snackbar.open(JSON.stringify(err))
        this.status = 'ERROR';

      }
    });

  }

  handlerDelete(id: number) {

    let ref = this.dialog.open(DialogComponent, {
      data: {
        title: 'Eliminar checklist',
        message: `
        Esta seguro de querer eliminar esta checklist?
        al hacerlo se eliminara para siempre
        `
      }
    });

    ref.afterClosed().subscribe(action => {

      if (action) this.delete(id);

    });

  }

  private delete(id: number) {

    this.service.delete(id).subscribe({
      next: (res: any) => {
        this.store.removeItem(res.id);
        this.snackbar.open(`Check list was deleted`);
        if (this.store.pagination.totalItems == 0) this.status = 'NOTHING';
      },
      error: (err) => this.snackbar.open(JhotestResponse.getMessageError(err))
    })

  };


  private handleAddToStore(){
    if(this.status == 'NOTHING') this.status='OK';
  }

}