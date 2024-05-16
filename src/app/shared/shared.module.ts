import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { BtnComponent } from './btn/btn.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TotalPipe, BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [TotalPipe, BtnComponent],
})
export class SharedModule {}
