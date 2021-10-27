import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
