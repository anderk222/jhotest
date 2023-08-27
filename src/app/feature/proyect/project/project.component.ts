import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '@jhotest/store/modal.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectStoreService } from '../services/project-store.service';
import { ProjectService } from '../services/project.service';
import { LoadStatus } from '../../../model/LoadSatus';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'jhotest-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: []
})
export class ProjectComponent implements OnInit {

  constructor(
    public modal: ModalService,
    private route: ActivatedRoute,
    public store: ProjectStoreService,
    private service: ProjectService,
    private snackbar: MatSnackBar
  ) { };

  @Output() delete = new EventEmitter<number>();
  status: LoadStatus = 'OK';

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      this.findProject(Number(params.get('project')))

    });

  }


  findProject(id: number) {    

    if(id <=0 ) return this.status='ERROR';

    let project = this.store.find(id);

    if (!!project) return this.store.project = project;

    this.status = 'LOAD';

    this.service.findById(id).subscribe({

      next: (res) => {
        this.status = 'OK'
        this.store.project = res;
      },
      error: (err) => {
        this.status = 'ERROR';
        this.snackbar.open(JSON.stringify(err))
      }
    });
  }

}
