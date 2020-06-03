import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Research = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Research" />
    <h1>Research</h1>
    <p>"Somewhere, something incredible is waiting to be known. " Carl Sagan</p>
    <p>Link: Brittanic School</p>
    <p>Link: Gale Kids Infobits</p>
    <p>Link: Gale in Context Middle School</p>
    <p>Link: Kiddle</p>
    <p>Link: National Geographic Kids</p>
    <p>Link: Ducksters.com</p>
    <p>Link: Noodle Tools</p>
  </Layout>
)

export default Research
