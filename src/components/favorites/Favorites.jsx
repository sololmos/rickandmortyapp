import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import "./Favorites.css";
import { filter, order } from "../../redux/actions";

function Favorites(props) {
  const { favorites } = props;
  const dispatch = useDispatch();
  const [selectedGender, setSelectedGender] = useState("all"); // Estado para el género seleccionado
  const [selectedOrder, setSelectedOrder] = useState("");

  function handleOrder(event) {
    const selectedValue = event.target.value;
    setSelectedOrder(selectedValue); // Actualizar el estado con el valor seleccionado
    dispatch(order(selectedValue));
  }

  // Función para manejar el filtro
  function handleFilter(event) {
    setSelectedGender(event.target.value);
    dispatch(filter(event.target.value));
  }

  // Función para restablecer los filtros
  function handleResetFilters() {
    setSelectedGender("all"); // Restablecer el estado del género seleccionado
    setSelectedOrder("");
    dispatch(filter("all")); // Restablecer el filtro a su estado inicial
  }

  return (
    <div className="favorites-container">
      <h1>Mis Cartas Favoritas</h1>

      <div className="select-container">
        <select value={selectedGender} onChange={handleFilter}>
          <option value="all">All genders</option>
          <option value="unknown">Unknown</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
        </select>
        <div>

          <button className="buttonfilter" onClick={handleResetFilters}>
            Reset filters
          </button>
        </div>
        <select value={selectedOrder} onChange={handleOrder}>
          <option value="">Order by ID</option> 
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>

      <div className="favorites">
        {favorites.map((favorite) => (
          <Card
            key={favorite.id}
            id={favorite.id}
            name={favorite.name}
            image={favorite.image}
            gender={favorite.gender}
            species={favorite.species}
            status={favorite.status}
            origin={favorite.origin}
            isFavorite={true}

          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
