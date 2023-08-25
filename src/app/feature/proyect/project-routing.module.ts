import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProyectsComponent } from './proyects/proyects.component';

const routes: Route[] = [

  { path: '', component: ProyectsComponent },
  {
    path: ':project', component: ProjectComponent,
  },
  {
    path: ':project/checklist',
    loadChildren: () => import('@jhotest/feature/check-list/check-list.module')
      .then(m => m.CheckListModule)
  }


];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
