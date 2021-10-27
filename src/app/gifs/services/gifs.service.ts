import { Injectable, Query } from '@angular/core';

@Injectable({
  providedIn: 'root' // Servicio global en el root (El servicio puede usarse en cualquier parte de la app)
})
export class GifsService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor() { }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);
    }
  }
}
