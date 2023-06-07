import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './shared/components/busqueda/busqueda.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
