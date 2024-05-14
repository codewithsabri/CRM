import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ErrorsModule } from '../errors/errors.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorsModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ]
})
export class CoreModule { }
