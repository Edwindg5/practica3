import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto garantiza que el servicio esté disponible en toda la aplicación
})
export class HomeService {
  private pokemonListApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any> {
    return this.http.get(this.pokemonListApiUrl);
  }
}
