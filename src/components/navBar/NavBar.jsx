import "./NavBar.css";
import React from "react";
import SearchBar from "./searchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function NavBar(props) {
  const navigate = useNavigate();

  function handleLogout() {
    props.setAccess(false); // Eliminar permisos de acceso
    navigate("/"); // Redirigir al formulario de inicio de sesión
  }



function handleGetAllCharacters() {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  let allCharacters = [];

  // Función recursiva para obtener todos los personajes
  const getAllCharactersRecursive = (url) => {
    axios.get(url)
      .then(response => {
        // Agregar los personajes de la respuesta actual al array
        allCharacters = [...allCharacters, ...response.data.results];
        // Verificar si hay más páginas
        if (response.data.info.next) {
          // Llamar recursivamente para obtener la siguiente página de personajes
          getAllCharactersRecursive(response.data.info.next);
        } else {
          // No hay más páginas, todos los personajes han sido obtenidos
          props.setCharacters(allCharacters); // Actualizar el estado de los personajes en App.js
        }
      })
      .catch(error => {
        console.error("Error fetching characters:", error);
      });
  };

  // Iniciar la llamada recursiva con la URL base
  getAllCharactersRecursive(baseUrl);
}


  return (
    <div className="container">
      <div className="search">
        <SearchBar onSearch={props.onSearch}></SearchBar>
      </div>
      <button className="button-nav" onClick={handleGetAllCharacters}>
        <p className="name">Get all characters</p>
      </button>

      <button className="button-nav" onClick={props.addRandomCharacter}>
        <p className="name">Add random character</p>
      </button>

      <button className="button-nav">
        <Link className="link" to="/home">
          <p className="name">Home</p>
        </Link>
      </button>

      <button className="button-nav">
        <Link className="link" to="/about">
          <p className="name">About</p>
        </Link>
      </button>

      <button className="button-nav">
        <Link className="link" to="/favorites">
          <p className="name">My favorites</p>
        </Link>
      </button>

      <button className="button-nav" onClick={handleLogout}>
        <Link className="link" to="/">
          <p className="name">Log out</p>
        </Link>
      </button>
    </div>
  );
}
