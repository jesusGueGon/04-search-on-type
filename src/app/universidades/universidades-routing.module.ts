import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BySpainComponent } from './pages/by-spain/by-spain.component';
import { ByUnitedKingdomComponent } from './pages/by-united-kingdom/by-united-kingdom.component';
import { ByPortugalComponent } from './pages/by-portugal/by-portugal.component';

const routes: Routes = [
  {
    path: 'by-spain',
    component: BySpainComponent
  },
  {
    path: 'by-unitedkingdom',
    component: ByUnitedKingdomComponent
  },
  {
    path: 'by-portugal',
    component: ByPortugalComponent
  },
  {
    path: '**',
    redirectTo: 'by-spain'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversidadesRoutingModule { }
