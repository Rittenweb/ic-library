/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} path={path} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main style={{ marginTop: "30vh", position: "relative" }}>
          {children}
        </main>
        <footer
          style={{
            height: "40px",
            marginTop: "100px",
            borderTop: "1px solid #03c2fc",
          }}
        >
          © {new Date().getFullYear()}. Built with
          {`  `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>.{`  `}Images by
          Macrovector and <a href="https://www.freepik.com">Freepik</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
