import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Search from "../images/Icons/search.svg";
import Settings from "../images/Icons/settings.svg";
import "./header.scss";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="leftSideNavigation">
      <span>English</span>
      <img className="page-navigation-item" src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/United-Kingdom-flag-icon.png" alt="Italian Trulli" height="28"></img>
    </div>
    <div className="rightSideNavigation">
      <img className="page-navigation-item" src={Search} alt="Italian Trulli"></img>
      <img className="page-navigation-item" src={Settings} alt="Italian Trulli"></img>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
