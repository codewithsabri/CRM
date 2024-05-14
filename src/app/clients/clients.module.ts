import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageAddClientsComponent } from './page-add-clients/page-add-clients.component';
import { PageEditClientsComponent } from './page-edit-clients/page-edit-clients.component';



@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientsComponent,
    PageEditClientsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    PageListClientsComponent,
    PageAddClientsComponent,
    PageEditClientsComponent
  ]
})
export class ClientsModule { }
