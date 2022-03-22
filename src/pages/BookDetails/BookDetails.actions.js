const setBook = (book) => {
    return {
        type: SET_BOOK,
        payload: { book },
    };
};

export default {
    setBook,
};
export const SET_BOOK = "set.book";
