import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAddOrdersComponent } from './page-add-orders/page-add-orders.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageEditOrdersComponent } from './page-edit-orders/page-edit-orders.component';
import { ErrorsComponent } from '../errors/errors/errors.component';

// Déjas sur la route orders
const routes: Routes = [
  // on est déjà sur la route orders
  {path: '', component: PageListOrdersComponent }, 
  {path: 'add', component: PageAddOrdersComponent }, 
  {path: 'edit', component:PageEditOrdersComponent}, 
  { path: 'edit/:id', component:PageEditOrdersComponent },
 
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
