
import './App.css';
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import  {characters} from "./components/data/data.js"
//import Logo from "./components/data/Logo.png"
import Logo from "./components/data/Logo.svg"




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="Logo" src={Logo} alt='Logo'></img>
        
        <SearchBar onSearch={(characterID)=>window.alert(characterID)}></SearchBar>
        <Cards characters={characters}/>
        
        
      </header>
    </div>
  );
}

export default App;
