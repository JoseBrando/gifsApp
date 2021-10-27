import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>; // !: operador para indicar que el elemento no es nulo

  constructor() { }

  ngOnInit(): void {
  }

  public search(termino: string): void {
    const VALOR = this.txtSearch.nativeElement.value;

    console.log(VALOR);

    this.txtSearch.nativeElement.value = '';
  }

}
