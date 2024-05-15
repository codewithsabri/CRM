import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from '../errors/errors/errors.component';
import { MyPipePipe } from './my-pipe.pipe';
import { TotalPipe } from './pipes/total.pipe';




@NgModule({
  declarations: [
    MyPipePipe,
    TotalPipe
  ],
  imports: [
    CommonModule
   
  ]
})
export class SharedModule { }
