import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageAddClientsComponent } from './page-add-clients/page-add-clients.component';
import { PageEditClientsComponent } from './page-edit-clients/page-edit-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientsComponent,
    PageEditClientsComponent
  ],
  imports: [
    CommonModule,
  ClientsRoutingModule,
  FormsModule
  ],
  exports : [
    PageListClientsComponent,
    PageAddClientsComponent,
    PageEditClientsComponent
  ]
})
export class ClientsModule { }
