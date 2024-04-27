// import React, { useState } from "react";
// import "./Form.css"; // Importamos los estilos del formulario
// import validation from "./validation";

// export default function Form(props) {
//     const [userData, setUserData] = useState({
//         email: "",
//         password: "",
//     });
//     const [errors, setErrors] = useState({})

//     function handleChange(event){
//         const{name, value} = event.target;
//         setUserData({...userData, [name]:value})
//         setErrors(validation({
//             ...userData, [name]:value
//         }))
//     }
//   return (
//     <div className="form-container"> {/* Clase para los estilos del formulario */}
//       <form>
//         <label className="namedetail">Email: </label>
//         <input 
//             onChange={handleChange}
//             value={userData.email}
//             name= "email" 
//             type="text" 
//             placeholder="Email.."
//             className="form-input" 
//         />
//         <p className="error" >{errors.email? errors.email : null}</p>

//         <label className="namedetail">Password: </label>
//         <input 
//             onChange={handleChange}
//             type="password" 
//             placeholder="Password.."
//             name="password"
//             value={userData.password}
//             className="form-input" 
//         />
//         <p className="error">{errors.password? errors.password : null}</p>

//         <button type="submit" className="form-button">Enviar</button>
//       </form>
//       {/* Aplicamos los estilos de circleform a los círculos */}
//       <div className="circleform"></div>
//       <div className="circleform"></div>
//     </div>
//   );
// }


//------------------------------------------------------------------

// import React, { useState } from "react";
// import "./Form.css";
// import validation from "./validation";

// // Importar las clases de Font Awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// export default function Form(props) {
//     const [userData, setUserData] = useState({
//         email: "",
//         password: "",
//     });
//     const [errors, setErrors] = useState({})
//     const [showPassword, setShowPassword] = useState(false);

//     function handleChange(event) {
//         const { name, value } = event.target;
//         setUserData({ ...userData, [name]: value });
//         setErrors(validation({ ...userData, [name]: value }));
//     }

//     function togglePasswordVisibility() {
//         setShowPassword(!showPassword);
//     }

//     return (
//         <div className="form-container">
//             <form>
//                 <label className="namedetail">Email: </label>
//                 <input
//                     onChange={handleChange}
//                     value={userData.email}
//                     name="email"
//                     type="text"
//                     placeholder="Email.."
//                     className="form-input"
//                 />
//                 <p className="error">{errors.email ? errors.email : null}</p>

//                 <label className="namedetail">Password: </label>
//                 <div className="password-input-container">
//                     <input
//                         onChange={handleChange}
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Password.."
//                         name="password"
//                         value={userData.password}
//                         className="form-input"
//                     />
//                     <FontAwesomeIcon // Icono de ojo para alternar la visibilidad de la contraseña
//                         icon={showPassword ? faEyeSlash : faEye}
//                         className="password-toggle-icon"
//                         onClick={togglePasswordVisibility}
//                     />
//                 </div>
//                 <p className="error">{errors.password ? errors.password : null}</p>

//                 <button type="submit" className="form-button">Enviar</button>
//             </form>
//             <div className="circleform"></div>
//             <div className="circleform"></div>
//         </div>
//     );
// }


//---------------------------------------
import React, { useState } from "react";
import "./Form.css";
import validation from "./validation";

// Importar las clases de Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Form(props) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        setErrors(validation({ ...userData, [name]: value }));
    }

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }
    function handleSubmit(event){
        event.preventDefault();
        props.login(userData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label className="namedetail">Email: </label>
                <input
                    onChange={handleChange}
                    value={userData.email}
                    name="email"
                    type="text"
                    placeholder="Email.."
                    className="form-input"
                />
                <p className="error">{errors.email ? errors.email : null}</p>

                <label className="namedetail">Password: </label>
                <div className="password-input-container">
                    <input
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password.."
                        name="password"
                        value={userData.password}
                        className="form-input"
                    />
                    <FontAwesomeIcon // Icono de ojo para alternar la visibilidad de la contraseña
                        icon={showPassword ? faEyeSlash : faEye}
                        className="password-toggle-icon"
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <p className="error">{errors.password ? errors.password : null}</p>

                <button type="submit" className="form-button">Enviar</button>
            </form>
            <div className="circleform"></div>
            <div className="circleform"></div>
        </div>
    );
}
