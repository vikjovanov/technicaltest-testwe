import { Link } from "react-router-dom";
import getIdFromUrl from "../../utils/getIdFromUrl";

const BooksSectionList = (props) => {
    const { title, urlsArray } = props;
    return (
        <div>
            <h3>{title}</h3>
            <div>
                {urlsArray?.map((bookUrl, index) => (
                    <Link key={index} to={`/book/${getIdFromUrl(bookUrl)}`}>
                        <p>{bookUrl}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BooksSectionList;
