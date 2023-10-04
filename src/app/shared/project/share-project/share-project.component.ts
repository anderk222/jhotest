import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) { }

  @ViewChild("share") ref!: ElementRef;

  open = false;

  public users: Set<User> = new Set();

  private selectedUser!: User;

  ngOnInit(): void {

    this.route.params.subscribe((params) => {

      let projectId = params['id'];


      console.log(params);
      
      console.log(projectId);
      

      if (!projectId) return;

      this.findSharedUsers(parseInt(projectId));

    })

  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {

    const target = event.target as HTMLElement;

    if (!this.ref) return

    console.log('paso');


    if (!this.ref.nativeElement.contains(target)) {
      this.open = false;
    }

  }

  handlerOpen(event: Event) {

    event.stopImmediatePropagation()

    this.open = !this.open;

  }

  handlerInviteUser() {

    if (!this.selectedUser) return;

    this.users.add(this.selectedUser);

    this.service.addUser(this.selectedUser.id);

  }

  private findSharedUsers(projectId: number) {

    this.userService.findBySharedProject(projectId)
      .subscribe({
        next: (res) => this.users = res,
        error: (err) => console.error(err)
      })
  }

}
