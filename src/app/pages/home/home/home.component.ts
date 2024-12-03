import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // No es necesario HttpClientModule aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    groupedPokemonList: any[][] = []; // Pokémon organizados en grupos de 3
  
    constructor(private homeService: HomeService) {}
  
    ngOnInit(): void {
      this.loadPokemonList();
    }
  
    loadPokemonList(): void {
      this.homeService.getPokemonList().subscribe(
        (data) => {
          const allPokemon = data.results.map((pokemon: any, index: number) => {
            const pokemonId = index + 1;
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
            return {
              name: pokemon.name,
              image: imageUrl,
            };
          });
  
          // Agrupamos los Pokémon en subarreglos de 3
          for (let i = 0; i < allPokemon.length; i += 3) {
            this.groupedPokemonList.push(allPokemon.slice(i, i + 3));
          }
        },
        (error) => console.error('Error al obtener la lista de Pokémon:', error)
      );
    }
}
