import { SET_BOOKS } from "./BooksList.actions";

const initialState = {
    books: [],
};

const BooksListReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_BOOKS:
            state.books = payload.books;
            return state;
        default:
            return state;
    }
};

export default BooksListReducers;
