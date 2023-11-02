import "./NavBar.css";
import React from "react";
import SearchBar from "./searchBar/SearchBar";

export default function NavBar(props) {
  return (
    <div className="">
      <SearchBar
        onSearch={(characterID) => window.alert(characterID)}
      ></SearchBar>
    </div>
  );
}
