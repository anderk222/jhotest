import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { Route, RouterModule } from '@angular/router';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
    {
        path: '',
        component: ProfileComponent
    }
];

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileFormComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    
    ]
})
export class ProfileModule { }