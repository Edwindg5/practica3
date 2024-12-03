import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private pokemonListApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'; // URL para obtener todos los Pokémon

  constructor(private http: HttpClient) {}

  // Obtener la lista de Pokémon
  getPokemonList(): Observable<any> {
    return this.http.get(this.pokemonListApiUrl);
  }
}
