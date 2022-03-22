const setBooks = (books) => {
    return {
        type: SET_BOOKS,
        payload: { books },
    };
};

export default {
    setBooks,
};
export const SET_BOOKS = "set.books";
