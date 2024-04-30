import "./Card.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";

function Card(props) {
  const { id, name, image, gender, species, status, origin, favorites } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      props.deleteFavorite(id);
    } else {
      props.addFavorite({ id, name, image, gender, species, status, origin });
    }
  };

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFavorite(true);
      }
    });
  }, [favorites, id]);

  return (
    <div className="card">
      {props.onClose ? (
        <button className="button-card" onClick={() => props.onClose(id)}>
          X
        </button>
      ) : null}

      <Link className="link-card" to={`/detail/${id}/${name}`}>
        <img className="profileImage" alt={name} src={image}></img>
        <div className="name">{name}</div>
      </Link>
      <div className="textContainer">
        <div className="profile">{id}</div>
        <div className="profile">{gender}</div>
        <div className="profile">{species}</div>
        <div className="profile">{status}</div>
        <div className="profile">{origin.name}</div>
      </div>
      <FontAwesomeIcon
        icon={faHeart}
        className="heart-icon"
        onClick={toggleFavorite}
        style={{ color: isFavorite ? "#b1cc34" : "gray" }}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

export function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
