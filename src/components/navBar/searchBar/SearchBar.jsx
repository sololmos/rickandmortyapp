import "./SearchBar.css"
import React, { useState } from "react";
import buttonSearchImg from "./buttonSearch.svg"

export default function SearchBar(props) {
  const [id, setId] = useState("")

  const handleChange= (event) =>{
    console.log("funciona el handle", event.target.value)
    setId(event.target.value)
     //event.preventDefault();

  }

  const handleSearch = () => {
    props.onSearch(id); // Realiza la búsqueda con el valor actual de 'id'
    setId(""); // Limpia el campo de búsqueda
  }
    return (
          <div className="searchBox">
            <input
              className="searchInput"
              type="search" 
              placeholder="Search character..   "
              onChange={handleChange}
              value={id}
            />
            <button className="searchButton"

            onClick={handleSearch} >
              <i className="fa fa-search">
                <img src={buttonSearchImg} alt="Searchimg"></img>
              </i>
            </button>
        </div>
    );
  }