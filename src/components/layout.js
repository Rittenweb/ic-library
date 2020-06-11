import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, path }) => {
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
