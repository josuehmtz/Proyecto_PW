import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagosComponent } from './pagos/pagos.component';
import { AdminComponent } from './admin/admin.component';

const routes : Routes = [{path : "" , component:AdminComponent},
{path:"admin", component:AdminComponent},
{path:"pago", component:PagosComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
