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

export function filter(gender){
    return{
        type: "FILTER",
        payload : gender
    }
}

export function order(order){
    return{
        type: "ORDER",
        payload : order
    }
}