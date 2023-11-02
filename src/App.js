
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import { characters } from "./components/data/data.js";
import Logo from "./components/data/Logo.svg";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="Logo" src={Logo} alt="Logo"></img>
        <NavBar></NavBar>

        <Cards characters={characters} />
      </header>
    </div>
  );
}

export default App;
