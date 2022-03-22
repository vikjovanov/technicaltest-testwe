import { Link } from "react-router-dom";
import getIdFromUrl from "../../utils/getIdFromUrl";

const CharactersSectionList = (props) => {
    const { title, urlsArray } = props;

    return (
        <div>
            <h3>{title}</h3>
            {urlsArray?.map((characterUrl, index) => {
                return (
                    <Link
                        key={index}
                        to={`/characters/${getIdFromUrl(characterUrl)}`}
                    >
                        <p>{characterUrl}</p>
                    </Link>
                );
            })}
        </div>
    );
};

export default CharactersSectionList;
