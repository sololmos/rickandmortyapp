import React , { useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
//import { characters } from "./components/data/data.js";
import Logo from "./components/data/Logo.svg";
import NavBar from "./components/navBar/NavBar";
import axios from "axios"



function App() {
  const [characters, setCharacters] = useState([]);


  function onSearch(id){
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data})=>{
      if(data.name){
        setCharacters((oldChars)=>[...oldChars, data]);
      } else{
        window.alert('No hay personajes cn este id')
      }
    }).catch(err=> console.log(err));
  }

  function onClose(id){

    setCharacters(characters.filter(pj=>{
      return pj.id !== Number(id)
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="Logo" src={Logo} alt="Logo"></img>
        <NavBar onSearch={onSearch}></NavBar>
        <Cards onClose={onClose} characters={characters} />
      </header>
    </div>
  );
}

export default App;
