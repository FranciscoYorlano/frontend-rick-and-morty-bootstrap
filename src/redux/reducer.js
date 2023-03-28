import { ADD_FAVORITE, REMOVE_FAVORITE, SET_GLOBAL_ERROR } from "./actions";

// Inicial State
const inicialState = {
    allCharacters: [],
    favoritesCards: [],
    globalError: "",
};

// Redux reducer
const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favoritesCards: [...state.favoritesCards, action.payload],
            };

        case REMOVE_FAVORITE:
            return {
                ...state,
                favoritesCards: state.favoritesCards.filter(
                    (favCard) => favCard.id !== action.payload
                ),
            };
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.payload,
            };
        default:
            return { ...state };
    }
};

export default rootReducer;
