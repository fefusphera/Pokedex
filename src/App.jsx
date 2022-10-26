import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
        alt=""
        className="title"
      />
      <PokemonList />
    </div>
  );
}

export default App;
