import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export default function PokeCard() {
  return (
    <div>
      <h1>{mockPokemonData.name}</h1>
      <div>
        <img src={mockPokemonData.sprites.front_default} />
      </div>
      <div>
        <img src={mockPokemonData.sprites.front_shiny} />
      </div>
      <a href={mockPokemonData.video} target="_blank">
        Video
      </a>
    </div>
  );
}