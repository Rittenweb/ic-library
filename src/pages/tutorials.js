import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tutorials = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Tutorials" />
    <p>"How to Access and Use OverDrive </p>
    <p>Video embed</p>
  </Layout>
)

export default Tutorials
