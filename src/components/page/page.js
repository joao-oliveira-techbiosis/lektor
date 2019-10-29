import React from 'react';
import Ebook from "../../demos/ebook";
import "./page.scss";

class Page extends React.PureComponent {
    render() {
        return (
            <div className="page">
                <div className="header"></div>
                <div className="content">
                   <Ebook></Ebook>
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}

export default Page;
