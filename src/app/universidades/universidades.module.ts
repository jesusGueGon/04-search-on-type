import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversidadesRoutingModule } from './universidades-routing.module';
import { UniversidadesTableComponent } from './componets/universidades-table/universidades-table.component';
import { BySpainComponent } from './pages/by-spain/by-spain.component';
import { ByUnitedKingdomComponent } from './pages/by-united-kingdom/by-united-kingdom.component';
import { ByPortugalComponent } from './pages/by-portugal/by-portugal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UniversidadesTableComponent,
    BySpainComponent,
    ByUnitedKingdomComponent,
    ByPortugalComponent
  ],
  imports: [
    CommonModule,
    UniversidadesRoutingModule,
    SharedModule
  ]
})
export class UniversidadesModule { }
