import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Book from "../components/book";
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
        subtitle: "by William Golding • 1954",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_4-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "The Great Gatsby",
        subtitle: "by F. Scott Fitzgerald • 1925",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_5-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "Moby Dick",
        subtitle: "by Herman Melville • 1851",
        img: "http://interactivejoe.com/book-viewer/assets/images/bk_6-large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu."
    },
    {
        title: "Riders on the Storm",
        subtitle: "by The Doors • 1851",
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
                    <h1>Reading Now</h1>
                    <div className="book-list">
                        {books.map((book) => <Book book={book} />)}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Page;
