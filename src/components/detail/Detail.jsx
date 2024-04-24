import "./Detail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //hook par aimportar los parametros, el parametro en este caso es dinamico
import axios from "axios";


export default function Detail() {
  const {id, name } = useParams();
  // eslint-disable-next-line
  const [characterDetail, setCharacterDetail] = useState({})
  console.log(id, name)

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
      if(data.name){
        setCharacterDetail(data);
        console.log("ok",data)
      }else{
        window.alert('Doesnt exit this id')
      }
     
    })
    .catch(error => {
      // Manejo de errores
      console.error('Ocurrió un error:', error);
    });

  }, [id])

 


  return (
    <div className="bigcard">  
          <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner">
            <div className="detail-container">
              <img className="profileImage" src={characterDetail.image } alt={characterDetail.name} />
              <div className="textContainer">
                <h3 className="namedetail">{characterDetail.name && characterDetail.name}</h3>
                <h5 className="profile">Status:  {characterDetail.status && characterDetail.status}</h5>
                <h5 className="profile">Especie:  {characterDetail.species}</h5>
                <h5 className="profile">Género: {characterDetail.gender}</h5>
                <h5 className="profile">Origen:  {characterDetail.origin?.name}</h5>
              </div>
            </div>
          </div>
        </div>
        </div>

  );
}


<div className="bigcard">


</div>