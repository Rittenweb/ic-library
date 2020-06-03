import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Teachers = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Teachers" />
    <h1>Teachers</h1>
    <p>
      "Education is not the filling of a pail but the lighting of a fire."
      William Butler Yeats
    </p>
    <p>Link: Media Connect</p>
    <p>Link: Teachingbooks.net</p>
    <p>Link: The Mailbox</p>
    <p>Link: Interactive Ebooks</p>
    <p>Link: Brittanica Social Studies Launchpacks</p>
  </Layout>
)

export default Teachers
