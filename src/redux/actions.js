// Redux action types
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const FILTER_CARDS = "FILTER_CARDS";
const ORDER_CARDS = "ORDER_CARDS";
const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR";

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

const setGlobalError = (error) => {
    return {
        type: SET_GLOBAL_ERROR,
        payload: error,
    };
};

export {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    FILTER_CARDS,
    ORDER_CARDS,
    SET_GLOBAL_ERROR,
    addFavorite,
    removeFavorite,
    filterCards,
    orderCards,
    setGlobalError,
};
