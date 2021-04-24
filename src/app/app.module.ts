import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagosComponent } from './pagos/pagos.component';
import { DbtestComponent } from './dbtest/dbtest.component';

@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    DbtestComponent  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
