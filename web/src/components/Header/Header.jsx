import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/" className="header__title">{siteTitle}</Link>
    <nav className="header__nav">
      <Link to="/" className="header__link">Home</Link>
      <Link to="/portfolio/" className="header__link">Portfolio</Link>
      {/*<Link to="/story/" className="header__link">Story</Link>*/}
      {/*<Link to="/links/" className="header__link">Links</Link>*/}
      {/*<Link to="/contacts/" className="header__link">Contacts</Link>*/}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
