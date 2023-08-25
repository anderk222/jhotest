import { NgModule } from '@angular/core';

import { DropdownNavigationComponent } from '../dropdown/dropdown-navigation/dropdown-navigation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DropdownProjectNavigationComponent } from '@jhotest/shared/project/dropdown-project-navigation/dropdown-project-navigation.component';

@NgModule({
    imports: [DropdownNavigationComponent
        , MatSnackBarModule
        , DropdownProjectNavigationComponent
    ],
    exports: [DropdownProjectNavigationComponent],
    declarations: [],
    providers: [],
})
export class ProjectSharedModule { }
