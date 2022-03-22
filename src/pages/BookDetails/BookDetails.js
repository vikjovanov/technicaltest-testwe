import { useEffect, useState } from "react";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import BookDetailsActions from "./BookDetails.actions";
import {
    Link,
    useLocation,
    useParams,
    useSearchParams,
} from "react-router-dom";
import CharactersSectionList from "../../components/Characters/CharactersSectionList";
import RetryButton from "../../components/RetryButton";

const BookDetails = (props) => {
    const [isLoading, setLoader] = useState(true);
    const [errorFetch, setFetchError] = useState(false);
    const { id } = useParams();

    const dispatch = useDispatch();
    const book = useSelector((state) => state.bookDetails.book);

    const asyncGetBook = async () => {
        setLoader(true);
        try {
            const result = await api.getBook(id);
            dispatch(BookDetailsActions.setBook(result));
            setFetchError(false);
        } catch (e) {
            setFetchError(true);
        }
        setLoader(false);
    };

    useEffect(() => {
        asyncGetBook();
    }, [id]);

    if (errorFetch) {
        return <RetryButton retryFct={asyncGetBook} />;
    }

    return (
        <div>
            <h1>Détails du livre: {book.name || "..."}</h1>
            {!isLoading ? (
                <div>
                    <CharactersSectionList
                        title="POV Characters"
                        urlsArray={book.povCharacters}
                    />
                    <CharactersSectionList
                        title="All Characters"
                        urlsArray={book.characters}
                    />
                </div>
            ) : (
                <p>Chargement du livre ...</p>
            )}
        </div>
    );
};

export default BookDetails;
