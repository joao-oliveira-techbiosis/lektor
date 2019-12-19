import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss";

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/library" className="link">
      <img src="/icons/icon-72x72.png" />
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
