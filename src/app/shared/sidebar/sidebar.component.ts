import { Component, OnInit } from '@angular/core';

// Services
import { GifsService } from '../../gifs/services/gifs.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {}

  public buscar(text: string) {
    this.gifsService.buscarGifs(text);
  }

}
