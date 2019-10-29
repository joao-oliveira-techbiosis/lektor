import React from 'react';
import "../library.scss";

class Page extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render = () => {
        const { book } = this.props;

        return <div className="book-container">
            <div className="book-cover">
                <img src={book.img} alt="Book Cover" />
            </div>
            <div className="book-info">
                <div className="title">{book.title}</div>
                <div className="subtitle">{book.subtitle}</div>
                <div className="description">{book.description}</div>
            </div>
        </div>;
    }
}

export default Page;
