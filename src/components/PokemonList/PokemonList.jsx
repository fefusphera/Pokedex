import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import styles from "./index.module.scss";

const PokemonList = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  //   console.log(pokemon.results);

  return (
    <div className={styles.PokemonList}>
      {pokemon.results &&
        pokemon.results.map((el, index) => (
          <PokemonCard key={index} {...el} id={index + 1} />
        ))}
    </div>
  );
};

export default PokemonList;
