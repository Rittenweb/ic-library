import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./Navbar"

const Header = ({ siteTitle, path }) => (
  <header
    style={{
      background: `#03c2fc`,
      marginBottom: `1.45rem`,
      position: "fixed",
      top: "0",
      width: "100vw",
      height: "16vh",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0, fontFamily: `'Bad Script', cursive` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navbar path={path} />
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
