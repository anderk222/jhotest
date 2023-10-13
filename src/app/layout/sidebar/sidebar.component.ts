import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../feature/proyect/services/project.service';
import { AuthService } from '@jhotest/auth/service/auth.service';
import { LoadStatus } from '@jhotest/model/LoadSatus';

@Component({
  selector: 'jhotest-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private auth: AuthService
  ) { }

  status: LoadStatus = 'OK';

  projects: any[] = [];

  ngOnInit(): void {

    this.findSome(this.auth.userId);

  }

  private findSome(user: number) {

    this.status = 'LOAD';

    this.projectService.findSomeSort(user, { limit: 10, page: 0 }).subscribe({

      next: (res) => {
        
        this.projects = res;
        this.status = 'OK'

      },
      error: (err) => {
        this.status = 'ERROR';
        alert(JSON.stringify(err))
      }
    })

  };

  handleNew(){ this.newProject() }



  private newProject() {

    let project = { name: 'new project', user : {id : this.auth.userId } } as any;

    this.projectService.save(project).subscribe(
      {
        next: (res) => {
          this.projects.push({ id: res.id, name: res.name });

        },
        error: (err) => {

          alert(JSON.stringify(err))

        }}
    )

  }

}