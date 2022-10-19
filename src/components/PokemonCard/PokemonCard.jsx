import styles from "./index.module.scss";

const PokemonCard = (props) => {
  console.log(props.id);

  return (
    <div className={styles.PokemonCard}>
      <div className={styles.PokemonTitle}>
        <img
          className={styles.pokeball}
          src="https://i.pinimg.com/originals/64/b7/ec/64b7ec9d075e9f838d795ab19a3d05f0.png"
          alt=""
        />
        <h3 className={styles.PokemonId}> #{props.id}</h3>
      </div>
      <h3 className={styles.PokemonName}>{props.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt=""
        className={styles.PokemonImg}
      />
    </div>
  );
};

export default PokemonCard;

// https://pokeapi.co/api/v2/pokemon/{id or name}
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png
