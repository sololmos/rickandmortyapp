
// Favorites.jsx

import React from "react";
import { connect } from "react-redux";
import Card from "../card/Card";
import "./Favorites.css";

function Favorites(props) {
  const { favorites } = props;

  return (
    <div className="favorites-container">
      <h1>Mis Cartas Favoritas</h1>
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

// import React from "react";
// import { connect } from "react-redux";
// import Card from "../card/Card"; // Asumiendo que tienes un componente Card existente
// import "./Favorites.css"; // Archivo CSS para estilos de FavoriteCards

// function Favorites(props) {
//   const { favorites } = props;

//   return (
//     <div className="favorite-cards-container">
//       <h2>Mis Cartas Favoritas</h2>
//       <div className="favorite-cards">
//         {favorites.map((favorite) => (
//           <Card
//             key={favorite.id} // Asegúrate de tener una clave única para cada tarjeta
//             id={favorite.id}
//             name={favorite.name}
//             image={favorite.image}
//             gender={favorite.gender}
//             species={favorite.species}
//             status={favorite.status}
//             origin={favorite.origin}
//             isFavorite={true} // Marcar todas las tarjetas como favoritas
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
