import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { DropdownSelectionComponent } from './dropdown-selection/dropdown-selection.component';
import { DropdownNavigationComponent } from './dropdown-navigation/dropdown-navigation.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule, RouterModule, DropdownNavigationComponent],
    exports: [DropdownComponent , DropdownSelectionComponent, DropdownNavigationComponent],
    declarations: [
    DropdownComponent,
    DropdownSelectionComponent,
    
  ],
    providers: [],
})
export class DropdownSharedModule { }
