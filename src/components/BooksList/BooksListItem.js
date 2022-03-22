import { PureComponent } from "react";
import { Link } from "react-router-dom";

class BooksListItem extends PureComponent {
    render() {
        const { id, name } = this.props;

        return (
            <Link to={`/book/${id}`}>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <p>{name}</p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default BooksListItem;
