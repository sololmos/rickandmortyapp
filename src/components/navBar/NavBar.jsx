import "./NavBar.css";
import React from "react";
import SearchBar from "./searchBar/SearchBar";

export default function NavBar(props) {
  return (
    <div className="">
      <SearchBar
        onSearch={props.onSearch}
      ></SearchBar>

      <button className="button-nav" onClick={props.addRandomCharacter}>
        <p className="name" >Add random character</p>
        </button>
    </div>
  );
}
