import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _getTrending = '/api/trending';
  private _getRandom = '/api/random';
  private _getSticker = '/api/sticker';

  constructor(private _http: Http) {

  }

  getTrending() {  
    return this._http.get(this._getTrending).pipe(
      map((response: Response) => response.json())
    );
  }

  getRandom() {
    return this._http.get(this._getRandom).pipe(
      map((response: Response) => response.json())
    );
  }

  getSticker() {
    return this._http.get(this._getSticker).pipe(
      map((response: Response) => response.json())
    );
  }

}