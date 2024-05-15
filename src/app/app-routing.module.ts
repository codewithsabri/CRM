import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './errors/errors/errors.component';

const routes: Routes = [
  {path: '', redirectTo:'/orders', pathMatch: 'full'},
  {path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
  {path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)},
  {path:'**', component :  ErrorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
