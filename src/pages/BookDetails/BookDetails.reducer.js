import { SET_BOOK } from "./BookDetails.actions";

const initialState = {
    book: {},
};

const BookDetailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_BOOK:
            state.book = payload.book;
            return state;
        default:
            return state;
    }
};

export default BookDetailsReducer;
