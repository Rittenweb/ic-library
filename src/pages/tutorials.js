import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tutorials = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Tutorials" />
    <div className="gwrapper">
      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          paddingBottom: "4px",
          margin: "0",
        }}
      >
        How to Access and Use OverDrive
      </p>
    </div>
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <iframe
        src="https://drive.google.com/file/d/1AhbJxfd7A5rOOI14PXGGrF04-WIOdwcM/preview"
        width="640"
        height="480"
      ></iframe>
    </div>
  </Layout>
)

export default Tutorials
