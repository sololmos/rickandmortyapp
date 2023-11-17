import "./Detail.css";
import React from "react";
import { useParams } from "react-router-dom"; //hook par aimportar los parametros, el parametro en este caso es dinamico



export default function Detail() {
  const {id} = useParams();
  console.log(id)
  return (

    <div>
        <p>
            Soy el detail
        </p>
    </div>

  );
}
