import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'universidades',
    loadChildren: () => import('./universidades/universidades.module').then( m => m.UniversidadesModule)
  },
  {
    path:'**',
    redirectTo: 'universidades'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
