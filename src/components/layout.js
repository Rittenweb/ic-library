/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
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
      <Header path={path} />
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
        <div className="gwrappertop">
          <footer
            style={{
              height: "30px",
              paddingTop: "10px",
              display: "flex",
              justifyContent: "space-evenly",
              fontSize: ".8rem",
            }}
          >
            <span>
              Built with
              {`  `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>.
            </span>
            <span>
              Images by Macrovector and{" "}
              <a href="https://www.freepik.com">Freepik</a>.
            </span>
            <span>
              Starry CSS background by{" "}
              <a href="https://leaverou.github.io/css3patterns/#starry-night">
                Lea Verou
              </a>
            </span>
            <span>© {new Date().getFullYear()}</span>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
