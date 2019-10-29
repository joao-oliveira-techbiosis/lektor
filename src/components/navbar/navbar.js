import React from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom'

class Navbar extends React.PureComponent {
    render = () => {
        return <div className="navbar2">
            <h1 className="home">Lektor</h1>
            <div className="navigation">
                    <Link to="/Library">Library</Link>
                    <Link to="/Page">Page</Link>
            </div>
        </div>;
    }
}

export default Navbar;
