import { Component, OnInit } from '@angular/core';
import { ProjectService } from '@jhotest/feature/proyect/services/project.service';
import { AuthService } from '@jhotest/auth/auth.service';
import { Pageable } from '@jhotest/model/pagination';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DropdownNavOpt } from '@jhotest/shared/dropdown/models/option';
import { DropdownNavigationComponent } from '@jhotest/shared/dropdown/dropdown-navigation/dropdown-navigation.component';

@Component({
  selector: 'jhotest-dropdown-project-navigation',
  templateUrl: './dropdown-project-navigation.component.html',
  styleUrls: ['./dropdown-project-navigation.component.css'],
  standalone : true,
  imports : [DropdownNavigationComponent]
})
export class DropdownProjectNavigationComponent implements OnInit {

  constructor(
    private service: ProjectService,
    private auth: AuthService,
    private snackbar: MatSnackBar,
  ) { }

  options: DropdownNavOpt[] = [];

  ngOnInit(): void {
    this.snackbar.open('dsd')

    this.find(this.auth.userId);

  }

  private find(id: number) {

    let pageable: Pageable = {
      page: 0,
      limit: 10
    }

    this.service.findSomeSort(id, pageable).subscribe({

      next: (res) => this.options = res.map(function (v): DropdownNavOpt {
        return {
          text: v.name,
          path: `/proyect/${v.id}`
        };
      }),
      error: (err) => this.snackbar.open(JSON.stringify(err))

    });

  }

}