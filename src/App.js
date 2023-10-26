
import './App.css';
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import  {characters} from "./components/data/data.js"




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
         Rick and Morty App
        </h1>
        <SearchBar onSearch={(characterID)=>window.alert(characterID)}></SearchBar>
        <Cards characters={characters}/>
        
        
      </header>
    </div>
  );
}

export default App;
