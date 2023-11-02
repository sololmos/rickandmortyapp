import "./SearchBar.css"
import React from "react";
import buttonSearchImg from "./buttonSearch.svg"

export default function SearchBar(props) {
    return (
          <div className="searchBox">
            <input
              className="searchInput"
              type="search" 
              placeholder="Search character..   "
            />
            <button onClick={props.onSearch} className="searchButton">
              <i className="fa fa-search">
                <img src={buttonSearchImg} alt="Searchimg"></img>
              </i>
            </button>
        </div>
    );
  }