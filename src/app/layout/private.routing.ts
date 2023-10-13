import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: '', component: RootComponent,
    children: [
      {
        path: 'proyect',
        loadChildren: () => import('@jhotest/feature/proyect/proyect.module')
          .then(m => m.ProyectModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('@jhotest/feature/profile/profile.module')
          .then((m => m.ProfileModule))
      },

    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
  providers: [],
})
export class PrivateRoutingModule { }
