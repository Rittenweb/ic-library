import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Students = ({ data, path, location }) => (
  <Layout path={location.pathname}>
    <SEO title="Students" />
    <h1>Students</h1>
    <p>"Today a Reader. Tomorrow a Leader." Margaret Fuller</p>
    <p>Link: Wonderopolis</p>
    <p>Link: Legends of Learning</p>
    <p>Link: Magic Treehouse Kids Adventure Club</p>
    <p>Link: Epic</p>
    <p>Link: Science for Kids</p>
    <p>Link: National Geographic Kids</p>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
  </Layout>
)

export default Students

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
