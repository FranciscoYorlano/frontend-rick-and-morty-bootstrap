import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

// Inicial State
const inicialState = {
    allCharacters: [],
    favoritesCards: [],
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
        default:
            return { ...state };
    }
};

export default rootReducer;
