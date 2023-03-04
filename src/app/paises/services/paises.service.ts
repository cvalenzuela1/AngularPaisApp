import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlv2: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields','name,capital,population,flags,alpha2Code');
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  verPais( alpha: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ alpha }`;
    return this.http.get<Country>( url );
  }

  verRegionalBloc( regionalBloc: string ): Observable<Country[]> {
    const url = `${ this.apiUrlv2 }/regionalbloc/${ regionalBloc }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
}
