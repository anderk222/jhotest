import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RootComponent } from './root/root.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownProjectNavigationComponent } from '@jhotest/shared/project/dropdown-project-navigation/dropdown-project-navigation.component';
import { ShareProjectComponent } from '@jhotest/shared/project/share-project/share-project.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        DropdownProjectNavigationComponent,
        ShareProjectComponent,
        RouterModule,
        CommonModule
    ],
    exports: [
        NavbarComponent,
        RootComponent,
        SidebarComponent],
    declarations: [NavbarComponent,
        RootComponent,
        SidebarComponent],
    providers: [],
})
export class LayoutModule { }
