import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';


@Injectable({
  providedIn: 'root' // Servicio global en el root (El servicio puede usarse en cualquier parte de la app)
})
export class GifsService {

  private apiKey: string = 'RfklaJpNBEUX5jVpw6PJFuVkwXJlz38D';
  private _historial: string[] = [];
  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=RfklaJpNBEUX5jVpw6PJFuVkwXJlz38D&q=anime&limit=20')
    .subscribe(
      (response: any) => {
      console.log(response.data);
      this.resultados = response.data;
    });
  }
}
