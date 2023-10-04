import { Component, OnInit } from '@angular/core';
import { AuthService } from '@jhotest/auth/auth.service';
import { UserDetailService } from '../service/userdetail.servide';
import { UserService } from '@jhotest/feature/user/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '@jhotest/feature/user/model/user';
import { LoadStatus } from '@jhotest/model/LoadSatus';

@Component({
  selector: 'jhotest-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private snackbar: MatSnackBar
  ) { }

  public user: User = {} as User;

  public status: LoadStatus = 'OK';

  ngOnInit(): void {

    this.find(this.auth.userId);

  };

  private find(userId: number) {

    this.status = 'LOAD';
    
    this.userService.find(userId).subscribe({

      next: (res) => {
        this.status = 'OK'
        this.user = res
      },
      error: () => {
        this.status = 'ERROR';
        this.snackbar.open('error al traer la informacion')
      }

    })
  };

}