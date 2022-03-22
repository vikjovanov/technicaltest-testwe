import { SET_CHARACTER } from "./CharactersDetails.actions";

const initialState = {
    character: {},
};

const CharactersDetailsReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case SET_CHARACTER:
            state.character = payload.character;
            return state;
        default:
            return state;
    }
};

export default CharactersDetailsReducer;
