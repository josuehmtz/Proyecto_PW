import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagosComponent } from './pagos/pagos.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { ProyectoServices } from './proyecto.services';
import { DataServices } from './data.services';

@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ProyectoServices, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
