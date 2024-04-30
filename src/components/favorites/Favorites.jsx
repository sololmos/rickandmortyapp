import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import "./Favorites.css";
import { filter, order } from "../../redux/actions";

function Favorites(props) {
  const { favorites } = props;
  const dispatch = useDispatch();
  const [selectedGender, setSelectedGender] = useState("all"); // Estado para el género seleccionado

  // Función para manejar el ordenamiento
  function handleOrder(event) {
    dispatch(order(event.target.value));
  }

  // Función para manejar el filtro
  function handleFilter(event) {
    setSelectedGender(event.target.value);
    dispatch(filter(event.target.value));
  }



  // Función para restablecer los filtros
  function handleResetFilters() {
    setSelectedGender("all"); // Restablecer el estado del género seleccionado
    dispatch(filter("all")); // Restablecer el filtro a su estado inicial
  }

  return (
    <div className="favorites-container">
      <h1>Mis Cartas Favoritas</h1>
      {/* Contenedor para los selects */}
      <div className="select-container">
        <select value={selectedGender} onChange={handleFilter}>
          <option value="all">Todos</option>
          <option value="unknown">Unknown</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
        </select>
        <div>
            {/* Botón para restablecer los filtros */}
            <button className="buttonfilter" onClick={handleResetFilters}>Restablecer Filtros</button>
        </div>
        <select onChange={handleOrder}>
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
            // onClose={props.onClose} 
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





// Favorites.jsx

// import React from "react";
// import { connect , useSelector, useDispatch} from "react-redux";
// import Card from "../card/Card";
// import "./Favorites.css";
// import { filter,order } from "../../redux/actions";

// function Favorites(props) {
//   const { favorites } = props;
//   const dispatch=useDispatch()

//   function handleOrder(event){
//     dispatch(order(event.target.value))
//   }
//   function handleFilter(event){
//     dispatch(filter(event.target.value))
//   }

//   return (
//     <div className="favorites-container">
       
//       <h1>Mis Cartas Favoritas</h1>
//           {/* Contenedor para los selects */}
//           <div className="select-container">
//             <select onChange={handleOrder}>
//               <option value="A">Ascendente</option>
//               <option value="D">Descendente</option>
//             </select>
//             <select onChange={handleFilter}>
//               <option value="unknown">Unknown</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Genderless">Genderless</option>
//             </select>
//           </div>
//       <div className="favorites">
//         {favorites.map((favorite) => (
//           <Card
//             key={favorite.id}
//             id={favorite.id}
//             name={favorite.name}
//             image={favorite.image}
//             gender={favorite.gender}
//             species={favorite.species}
//             status={favorite.status}
//             origin={favorite.origin}
//             isFavorite={true}
//             // onClose={props.onClose} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     favorites: state.favorites,
//   };
// };

// export default connect(mapStateToProps)(Favorites);

