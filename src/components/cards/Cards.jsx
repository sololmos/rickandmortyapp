import React, { useState } from "react";
import Card from "../card/Card";
import "./Cards.css";


export default function Cards(props) {
  const [page, setPage] = useState(1);
  const pageSize = 20; // Cantidad de elementos por página

  const totalPages = Math.ceil(props.characters.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const charactersToShow = props.characters.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };


  return (
    <div>
      <h1 className="title">CHARACTERS</h1>
      <div className="Cards-row">
        {charactersToShow.map((pj) => {
          if (pj.name) {
            return (
              <Card
                key={pj.id}
                id={pj.id}
                name={pj.name}
                status={pj.status}
                species={pj.species}
                gender={pj.gender}
                origin={pj.origin.name}
                image={pj.image}
                onClose={props.onClose}
              ></Card>
            );
          }
          return null;
        })}
      </div>
      {props.characters.length > 0 && (
        <div className="pagination">
          <button className="buttonfilter"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Prev
          </button>
          <span className="profile">
            Page {page} of {totalPages}
          </span>
          <button className="buttonfilter"
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
