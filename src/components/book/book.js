import React from 'react';
import { Link } from "gatsby"
import "../../pages/page";

class Book extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render = () => {
        const { book } = this.props;

        return <div className="book-container">
            <Link className="book-cover" to="/page">
                <img src={book.img} alt="Book Cover" />
            </Link>
            <div className="book-info">
                <Link to="/page" className="title">
                    {book.title}
                </Link>
                <div className="subtitle">{book.subtitle}</div>
            </div>
        </div>;
    }
}

export default Book;
