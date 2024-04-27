
import "./NavBar.css";
import React from "react";
import SearchBar from "./searchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const navigate = useNavigate();

  function handleLogout() {
    props.setAccess(false); // Eliminar permisos de acceso
    navigate('/'); // Redirigir al formulario de inicio de sesión
  }

  return (
    <div className="container">

      <div className="search" >
        <SearchBar
          onSearch={props.onSearch}
        ></SearchBar>
      </div>

      <button className="button-nav" onClick={props.addRandomCharacter}>
        <p className="name" >Add random character</p>
      </button>

      <button className="button-nav" >
        <Link className="link" to="/home" >
        <p className="name" >Home</p>
        </Link>
       
      </button>

      <button className="button-nav" >
        <Link className="link" to="/about">
        <p className="name" >About</p>
        </Link>
        
      </button>

      <button className="button-nav"  onClick={handleLogout}>
        <Link className="link" to="/">
        <p className="name" >Log out</p>
        </Link>
        
      </button>





    </div>
  );
}

//------------------------

// import "./NavBar.css";
// import React from "react";
// import SearchBar from "./searchBar/SearchBar";
// import { Link } from "react-router-dom";

// export default function NavBar(props) {
//   return (
//     <div className="container">

//       <div className="search" >
//         <SearchBar
//           onSearch={props.onSearch}
//         ></SearchBar>
//       </div>

//       <button className="button-nav" onClick={props.addRandomCharacter}>
//         <p className="name" >Add random character</p>
//       </button>

//       <button className="button-nav" >
//         <Link className="link" to="/home" >
//         <p className="name" >Home</p>
//         </Link>
       
//       </button>

//       <button className="button-nav" >
//         <Link className="link" to="/about">
//         <p className="name" >About</p>
//         </Link>
        
//       </button>





//     </div>
//   );
// }

//------------------------------