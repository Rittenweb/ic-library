import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tutorials = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Tutorials" />
    <h1>Tutorials</h1>
    <p>"How to Access and Use OverDrive </p>
    <p>Video embed</p>
  </Layout>
)

export default Tutorials
