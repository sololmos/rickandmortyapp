import { addFavorite, deleteFavorite } from "./actions"

const initialState={
    favorites :[],
    characters:[],
    access:false,

}
export default function rootReducer(state=initialState, action){
    switch(action.type){
        case "ADD_FAVORITE":
           return {...state,
             favorites:[...state.favorites, action.payload]
            }
        case "DELETE_FAVORITE":
            return{
                ...state,
                favorites: state.favorites.filter(fav =>fav.id !== action.payload)
            }


        default :     
        return {...state}
    }

}