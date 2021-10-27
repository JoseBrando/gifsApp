import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';





@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultsComponent
  ],
  exports: [
    GifsPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
