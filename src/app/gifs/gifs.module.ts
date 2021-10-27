import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { GifsPageComponent } from './gifs-page/gifs-page.component';



@NgModule({
  declarations: [
    GifsPageComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GifsModule { }
