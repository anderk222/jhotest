import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { User } from '@jhotest/feature/user/model/user';
import { UserService } from '@jhotest/feature/user/service/user.service';
import { LoadStatus } from '@jhotest/model/LoadSatus';

@Component({
  selector: 'jhotest-user-autocomplete',
  templateUrl: './user-autocomplete.component.html',
  styleUrls: ['./user-autocomplete.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserAutocompleteComponent {

  constructor(private service: UserService) { }

  @ViewChild('userAutocomplete') element!: ElementRef;

  users: User[] = [];

  status: LoadStatus = 'NOTHING';

  @ViewChild('ipt') ipt! : ElementRef<HTMLInputElement>;

  open = false;
  
  @Output() select = new EventEmitter<User>();

  handlerChangeInput(value: string) {

    this.status = 'LOAD';

    this.service.search(value).subscribe({

      next: (res) => {

        this.users = res.data;
        this.status = res.totalItems == 0 ? 'NOTHING' : 'OK';
      },
      error: (error) => this.status = 'ERROR'

    })
  }

  handlerSelect(user : User){

    this.ipt.nativeElement.value = user.correo;

    this.select.emit(user);

  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {

    let target = event.target as HTMLElement;

    if (!this.element.nativeElement.contains(target)) {

      this.open = false;
    }
  }

}