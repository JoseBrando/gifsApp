import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Servicio global en el root (El servicio puede usarse en cualquier parte de la app)
})
export class GifsService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor() { }

  buscarGifs(query: string) {
    this._historial.unshift( query );

    console.log(this._historial);
  }
}
