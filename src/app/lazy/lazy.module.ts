import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyComponent
  ]
})
export class LazyModule { 
  // Could also be published via a service
  public LazyComponent = LazyComponent;
}
