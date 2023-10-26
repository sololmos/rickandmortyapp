
import './App.css';
import Card from "./components/card/Card.jsx";
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import  {characters,Rick} from "./components/data/data.js"




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
         Rick and Morty App
        </h1>
        <SearchBar onSearch={(characterID)=>window.alert(characterID)}></SearchBar>
        <Cards characters={characters}/>
        <Card
          id={Rick.id}
          name={Rick.name}
          status={Rick.status}
          species={Rick.species}
          gender={Rick.gender}
          origin={Rick.origin.name}
          image={Rick.image}
          onClose={()=>window.alert("close card")}
        />
        
        
       
      </header>
    </div>
  );
}

export default App;
