import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RootComponent } from './root/root.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownProjectNavigationComponent } from '@jhotest/shared/project/dropdown-project-navigation/dropdown-project-navigation.component';
import { ShareProjectComponent } from '@jhotest/shared/project/share-project/share-project.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private.routing';


@NgModule({
    imports: [
        DropdownProjectNavigationComponent,
        ShareProjectComponent,
        CommonModule,
        PrivateRoutingModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        RootComponent,
        SidebarComponent,
        PrivateRoutingModule
    ],
    declarations: [NavbarComponent,
        RootComponent,
        SidebarComponent],
    providers: [],
})
export class LayoutModule { }
