import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  groupedPokemonList: any[][] = []; 
  hasError: boolean = false; // Nueva propiedad para manejar errores visualmente

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList(): void {
    this.homeService.getPokemonList().subscribe(
      (data) => {
        this.hasError = false; // Reinicia la bandera de error
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
      (error) => {
        console.error('Error al obtener la lista de Pokémon:', error);
        this.hasError = true; // Activa la bandera de error
      }
    );
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/default-image.png'; // Ruta de la imagen por defecto
  }
}
