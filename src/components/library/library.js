import React from 'react';
import Book from "./book/book";
import "./library.scss";

const demoBooks = [
    {
        title: "Of Mice and Men",
        subtitle: "by John Steinbeck • 1937",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_1-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "The Catcher in the Rye",
        subtitle: "by J.D. Salinger • 1951",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_2-small.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "1984",
        subtitle: "by George Orwell • 1949",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_3-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "The Lord of the Flies",
        subtitle: "by George Orwell • 1949",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_4-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
];

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            books: demoBooks,
        };
    }

    onChangeSearch = (event) => this.setState({ search: event.target.value });

    filterBooks = (search) => {
        if (!search || search === "") return demoBooks;

        const filteredBooks = demoBooks.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
        return filteredBooks;
    }

    render() {
        const { search } = this.state;
        const filteredBooks = this.filterBooks(search);

        return (
            <div className="page-container">
                <input className="search-books " type="text" maxlength="60" onChange={(event) => this.onChangeSearch(event)}></input>
                <div className="book-list">
                    {filteredBooks.map((book) => <Book book={book} />)}
                </div>
            </div>
        );
    }
}

export default Page;
