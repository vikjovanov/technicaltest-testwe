import { useEffect, useState } from "react";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import BooksListActions from "./BooksList.actions";
import getIdFromUrl from "../../utils/getIdFromUrl";
import BooksListItem from "../../components/BooksList/BooksListItem";
import RetryButton from "../../components/RetryButton";

const BooksList = (props) => {
    const [isLoading, setLoader] = useState(false);
    const [errorFetch, setFetchError] = useState(false);
    const books = useSelector((state) => state.booksList.books);
    const dispatch = useDispatch();

    const asyncGetBooks = async () => {
        setLoader(true);
        try {
            const result = await api.getBooks();
            dispatch(BooksListActions.setBooks(result));
            setFetchError(false);
        } catch (e) {
            setFetchError(true);
        }
        setLoader(false);
    };

    useEffect(() => {
        asyncGetBooks();
    }, []);

    if (errorFetch) {
        return <RetryButton retryFct={asyncGetBooks} />;
    }

    return (
        <div>
            <h1>Découvrir un livre</h1>
            {!isLoading ? (
                books.map((book, index) => {
                    return (
                        <BooksListItem
                            key={index}
                            name={book.name}
                            id={getIdFromUrl(book.url)}
                        />
                    );
                })
            ) : (
                <p>Chargement des livres ...</p>
            )}
        </div>
    );
};

export default BooksList;
