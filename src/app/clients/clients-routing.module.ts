import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from '../clients/page-list-clients/page-list-clients.component';

import { PageEditClientsComponent } from '../clients/page-edit-clients/page-edit-clients.component';
import { PageAddClientsComponent } from './page-add-clients/page-add-clients.component';
import { ErrorsComponent } from '../errors/errors/errors.component';
// Déjas sur la route orders
const routes: Routes = [
  // on est déjà sur la route orders
  {path: '', component: PageListClientsComponent }, 
  {path: 'add', component: PageAddClientsComponent }, 
  {path: 'edit', component: PageEditClientsComponent }, 

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
