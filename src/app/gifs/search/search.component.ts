import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Services
import { GifsService } from '../services/gifs.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>; // !: operador para indicar que el elemento no es nulo

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  public search(termino: string): void {
    const VALOR = this.txtSearch.nativeElement.value;

    this.gifsService.buscarGifs(VALOR);

    this.txtSearch.nativeElement.value = '';
  }

}
