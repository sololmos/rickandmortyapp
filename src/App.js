import React , { useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Logo from "./components/data/Logo.svg";
import NavBar from "./components/navBar/NavBar";
import axios from "axios"
import{Routes, Route} from "react-router-dom"
import About from "./components/about/About.jsx"
import Detail from "./components/detail/Detail.jsx";



function App() {
  const [characters, setCharacters] = useState([]);


  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          // Verificar si el personaje ya está en la lista
          const isDuplicate = characters.some((character) => character.id === data.id);
          if (!isDuplicate) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('Este personaje ya está en la lista.');
          }
        } else {
          window.alert('No hay personajes con este ID');
        }
      })
      .catch((err) => console.log(err));
  }

  function onClose(id){

    setCharacters(characters.filter(pj=>{
      return pj.id !== Number(id)
    }))
  }

  function addRandomCharacter() {
    const randomId = Math.floor(Math.random() * 826); // Número de personajes en la API (ajusta según sea necesario)
    onSearch(randomId);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img className="Logo" src={Logo} alt="Logo"></img>
        <NavBar addRandomCharacter={addRandomCharacter} onSearch={onSearch}></NavBar>
        {/* <NavBar onSearch={onSearch}></NavBar> */}
        {/* <button onClick={addRandomCharacter}>Add random character</button> */}
        <Routes>
          <Route
            path="/home"
            element={<Cards onClose={onClose} characters={characters} />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/detail/:id/:name"
            element={<Detail  />}
          />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
