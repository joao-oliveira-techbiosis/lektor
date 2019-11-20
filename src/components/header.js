import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss";

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1>
      <Link to="/" className="link">
        {siteTitle}
      </Link>
    </h1>
    <Link to="/library" className="link">
      Library
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
