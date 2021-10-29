import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';


@Injectable({
  providedIn: 'root' // Servicio global en el root (El servicio puede usarse en cualquier parte de la app)
})
export class GifsService {

  private apiKey: string = 'RfklaJpNBEUX5jVpw6PJFuVkwXJlz38D';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  private _resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  get resultados() {
    return [...this._resultados];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this._resultados = JSON.parse(localStorage.getItem('data')!) || [];
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', query)
    .set('limit', 10);

    console.log(params);

    this.http.get(`${this.servicioUrl}/search`, {params})
    .subscribe(
      (response: any) => {
      this._resultados = response.data;
      localStorage.setItem('data', JSON.stringify(this.resultados));
    });
  }
}
