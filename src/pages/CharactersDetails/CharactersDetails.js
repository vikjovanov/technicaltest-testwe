import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import api from "../../api/api";
import CharactersDetailsActions from "./CharactersDetails.actions";
import getIdFromUrl from "../../utils/getIdFromUrl";
import RetryButton from "../../components/RetryButton";
import BooksSectionList from "../../components/BooksList/BooksSectionList";

const CharactersDetails = (props) => {
    const { id } = useParams();
    const [isLoading, setLoader] = useState(true);
    const [errorFetch, setFetchError] = useState(false);
    const character = useSelector((state) => state.characterDetails.character);
    const dispatch = useDispatch();

    const asyncGetChar = async () => {
        setLoader(true);
        try {
            const result = await api.getCharacter(id);
            dispatch(CharactersDetailsActions.setCharacter(result));
            setFetchError(false);
        } catch (e) {
            setFetchError(true);
        }
        setLoader(false);
    };

    useEffect(() => {
        asyncGetChar();
    }, [id]);

    if (errorFetch) {
        return <RetryButton retryFct={asyncGetChar} />;
    }

    return (
        <div>
            {!isLoading ? (
                <>
                    <h1>Character: {character.name}</h1>
                    <BooksSectionList
                        title="Appear in theses books:"
                        urlsArray={character.books}
                    />
                    {character.povBooks.length > 0 && (
                        <BooksSectionList
                            title="Appear in theses books as POV Character:"
                            urlsArray={character.povBooks}
                        />
                    )}
                </>
            ) : (
                <p>Loading ...</p>
            )}
        </div>
    );
};

export default CharactersDetails;
