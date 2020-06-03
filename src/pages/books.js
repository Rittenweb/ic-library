import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Books = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Books" />
    <h1>Books</h1>
    <p>
      You can find magic wherever you look. Sit back and relax, all you need is
      a book! - Dr. Seuss
    </p>
    <p>Link: Online Catalog</p>
    <p>Link: Overdrive</p>
    <p>Link: Interactive Ebooks</p>
  </Layout>
)

export default Books
