import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // tslint:disable-next-line:no-inferrable-types
  private apikey: string = 'f3577ae73e8562f39f1c82c8c26577ae';
  // tslint:disable-next-line:no-inferrable-types
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor( private _http: HttpClient ) { }

  getURL (request: string, language: string) {
    return `${this.urlMoviedb}${request}&api_key=${this.apikey}&language=${language}`;
  }

  getpopular () {

    const request = '/discover/movie?sort_by=popularity.desc';
    const x = this.getURL(request, 'es');

    return this._http.jsonp( x, 'callback=JSONP_CALLBACK' )
      .pipe( map ((res: any) => res.results)
     );
  }
}
