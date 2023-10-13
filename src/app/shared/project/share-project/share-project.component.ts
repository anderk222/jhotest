import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '@jhotest/feature/proyect/services/project.service';
import { User } from '@jhotest/feature/user/model/user';
import { UserService } from '@jhotest/feature/user/service/user.service';
import { UserAutocompleteComponent } from '@jhotest/shared/user/user-autocomplete/user-autocomplete.component';

@Component({
  selector: 'jhotest-share-project',
  templateUrl: './share-project.component.html',
  styleUrls: ['./share-project.component.css'],
  standalone: true,
  imports: [CommonModule, UserAutocompleteComponent]
})
export class ShareProjectComponent implements OnInit {

  constructor(
    private service: ProjectService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  @ViewChild("share") ref!: ElementRef;

  open = false;

  project = 0;

  public users: User[] = [];

  private selectedUser!: User;

  ngOnInit(): void {

    this.route.queryParamMap.subscribe((params) => {

      let projectId = params.get('project');

      if (!projectId) return;

      this.project = parseInt(projectId)

      this.findSharedUsers(this.project);

    })

  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {

    const target = event.target as HTMLElement;

    if (!this.ref) return


    if (!this.ref.nativeElement.contains(target)) {
      this.open = false;
    }
  }

  handlerOpen(event: Event) {

    event.stopImmediatePropagation()

    this.open = !this.open;

  }

  handleSelectUser(user: User) {

    this.selectedUser = user;

  }

  handlerInviteUser() {

    if (!this.selectedUser) return;

    this.service.addUser(this.project, this.selectedUser.id)
      .subscribe(() => this.users.push(this.selectedUser));

  }

  private findSharedUsers(projectId: number) {

    this.userService.findBySharedProject(projectId)
      .subscribe({
        next: (res) => this.users = res,
        error: (err) => console.error(err)
      })
  }

}
