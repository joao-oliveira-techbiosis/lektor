import React from 'react';
import Book from "../book/book";

import "./bookList.scss";

class BookList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render = () => <div className="book-list">
        {this.props.books.map((book) => <Book book={book} />)}
    </div>;
}

export default BookList;