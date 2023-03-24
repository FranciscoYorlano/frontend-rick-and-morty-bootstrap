// Redux action types
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const FILTER_CARDS = "FILTER_CARDS";
const ORDER_CARDS = "ORDER_CARDS";

// Redux actions creators
const addFavorite = (char) => {
    return {
        type: ADD_FAVORITE,
        payload: char,
    };
};

const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id,
    };
};

const filterCards = (gender) => {
    return {
        type: FILTER_CARDS,
        payload: gender,
    };
};

const orderCards = (id) => {
    return {
        type: ORDER_CARDS,
        payload: id,
    };
};

export {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    FILTER_CARDS,
    ORDER_CARDS,
    addFavorite,
    removeFavorite,
    filterCards,
    orderCards,
};
