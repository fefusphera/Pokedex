import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        className="title"
        src="https://archives.bulbagarden.net/media/upload/archive/4/4b/20100413180610%21Pok%C3%A9dex_logo.png"
        alt=""
      />
      <PokemonList />
    </div>
  );
}

export default App;
