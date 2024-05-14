import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';




@NgModule({
  declarations: [
    IconCloseComponent,
    IconNavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports : [
   IconCloseComponent,
   IconNavComponent
  ]
})
export class IconsModule { }
