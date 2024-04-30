import { addFavorite, deleteFavorite,order, filter } from "./actions"

const initialState={
    favorites :[],
    allCharacters:[],
    access:false,

}
export default function rootReducer(state=initialState, action){
    switch(action.type){
        case "ADD_FAVORITE":
           const copy= [...state.allCharacters, action.payload]
           return {...state,
             //favorites:[...state.favorites, action.payload]
              favorites: copy, 
              allCharacters: [...copy]

            }
        case "DELETE_FAVORITE":
            const copia= state.favorites.filter(fav =>fav.id !== action.payload)//condi
            return{
                ...state,
               // favorites: state.favorites.filter(fav =>fav.id !== action.payload)
               favorites:copia
               
            }
        //   case "FILTER":
        //     return{
        //         ...state,
        //         //favorites : state.favorites.filter((pj)=> pj.gender === action.payload)
        //         favorites : state.allCharacters.filter((pj)=>pj.gender ===action.payload)
              
        //     }  

         case "FILTER":
            if (action.payload === "all") {
                return {
                ...state,
                favorites: state.allCharacters // Restablecer la lista de favoritos a la lista completa de personajes
                };
            } else {
                return {
                ...state,
                favorites: state.allCharacters.filter((pj) => pj.gender === action.payload)
                };
            }


            case "ORDER":
                let sortedFavorites = state.favorites.slice().sort((a, b) => {
                    if (action.payload === "A") {
                        return a.id - b.id;
                    } else {
                        return b.id - a.id;
                    }
                });
                return {
                    ...state,
                    favorites: sortedFavorites
                };

            // case "RESET_FILTERS":
            //         return {
            //           ...state,
            //           favorites: state.allCharacters, // Restablecer la lista de favoritos a la lista completa de personajes
            //         };

            // case "ORDER":
            //     let copia2=state.allCharacters.sort((a,b)=>{
            //         if(action.payload ==="A"){
            //             if(a.id>b.id) return 1
            //             if(a.id<b.id)return -1
            //         }else{
            //             if(a.id>b.id)return -1
            //             if(b.id<a.id)return 1
            //             return 0
            //         }
            //     })
            //     return{
            //         ...state,
            //         //favorites : state.favorites.filter((pj)=> pj.gender === action.payload)
            //         favorites : copia2
                  
            //     }  

            


        default :     
        return {...state}
    }

}