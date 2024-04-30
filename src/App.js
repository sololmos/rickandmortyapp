import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Logo from "./components/data/Logo.svg";
import NavBar from "./components/navBar/NavBar";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "pass2024";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  //--------------------------------------------------------------

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          // Verificar si el personaje ya está en la lista
          const isDuplicate = characters.some(
            (character) => character.id === data.id
          );
          if (!isDuplicate) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("Este personaje ya está en la lista.");
          }
        } else {
          window.alert("No hay personajes con este ID");
        }
      })
      .catch((err) => console.log(err));
  }

  
  //---------------------------

  function onClose(id) {
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }

  function addRandomCharacter() {
    const randomId = Math.floor(Math.random() * 826); // Número de personajes en la API (ajusta según sea necesario)
    onSearch(randomId);
  }

  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <img className="Logo" src={Logo} alt="Logo"></img>
        {location.pathname !== "/" && (
          <NavBar
            addRandomCharacter={addRandomCharacter}
            onSearch={onSearch}
            setAccess={setAccess}
            setCharacters={setCharacters} // Agregar prop para actualizar los personajes
          ></NavBar>
        )}

        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards 
              onClose={onClose}
               characters={characters} 
                />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id/:name" element={<Detail />} />
          <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
