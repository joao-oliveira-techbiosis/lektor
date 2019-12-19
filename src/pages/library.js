import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Book from "../components/book";
import "./library.scss";

const demoBooks = [
    {
        title: "Of Mice and Men",
        subtitle: "John Steinbeck • 1937",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_1-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "The Catcher in the Rye",
        subtitle: "J.D. Salinger • 1951",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_2-small.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "1984",
        subtitle: "George Orwell • 1949",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_3-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "The Lord of the Flies",
        subtitle: "William Golding • 1954",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_4-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "The Great Gatsby",
        subtitle: "F. Scott Fitzgerald • 1925",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_5-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "Moby Dick",
        subtitle: "Herman Melville • 1851",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_6-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "Riders on the Storm",
        subtitle: "The Doors • 1851",
        img: "https://img.discogs.com/SG5bYjp-L-FR6OkmzMTXnHLGlKE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2831460-1303170576.jpeg.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
];

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: demoBooks,
        };
    }

    render() {
        const { books } = this.state;

        return (
            <Layout>
                <SEO title="Home" />
                <div className="page-container">
                    <div className="category">
                        <span className="title">My Library</span>
                        <span className="see-all">See All ></span>
                    </div>
                    <div className="book-list">
                        {books.map((book) => <Book book={book} />)}
                    </div>
                    <div className="category">
                        <span className="title">Read Next</span>
                        <span className="see-all">See All ></span>
                    </div>
                    <div className="book-list">
                        {books.map((book) => <Book book={book} />)}
                    </div>

                    <div className="library-navigation">
                        <div className="library-navigation-container">
                            <img className="page-navigation-item" src="/icons/contents.svg" alt="Italian Trulli"></img>
                            <img className="page-navigation-item" src="/icons/text size.svg" alt="Italian Trulli"></img>
                            <img className="page-navigation-item" src="/icons/search.svg" alt="Italian Trulli"></img>
                            <img className="page-navigation-item" src="/icons/settings.svg" alt="Italian Trulli"></img>
                            <img className="page-navigation-item" src="/icons/bookmarks_off.svg" alt="Italian Trulli"></img>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Page;
