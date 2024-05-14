import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageAddClientsComponent } from './clients/page-add-clients/page-add-clients.component';
import { PageEditClientsComponent } from './clients/page-edit-clients/page-edit-clients.component';

const routes: Routes = [
  {path:'', component :PageListOrdersComponent},
  {path:'add', component : PageAddClientsComponent},
  {path:'edit', component :  PageEditClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
