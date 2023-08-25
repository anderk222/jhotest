import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'proyect', pathMatch :'full'},
  {
    path: 'proyect',
    loadChildren: () => import('@jhotest/feature/proyect/proyect.module')
      .then(m => m.ProyectModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
