import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePayButtonModule } from '@google-pay/button-angular';

import { AppComponent } from './app.component';
import { PagosComponent } from './pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    PagosComponent  
  ],
  imports: [
    BrowserModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
