import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent
  ],
  exports: [
    GifsPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
