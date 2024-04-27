export function addFavorite (objcharacter){
    return{
        type: "ADD_FAVORITE",
        payload: objcharacter
    }
};

export function deleteFavorite (id){
    return{
        type: "DELETE_FAVORITE",
        payload: id
    }
}