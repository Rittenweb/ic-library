import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Parents = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Parents" />
    <h1>Parents</h1>
    <p>
      "Reading should not be presented to children as a chore or duty. It should
      be offered to them as a precious gift.” – Kate DiCamillo
    </p>
    <p>
      Looking for a "Just-Right" book for your child? Check out these resources:
      (need to get links from burton st. library site)
    </p>
    <p>Common Sense Media: Best Books for Kids and Teens</p>
    <p>
      Brightly offers recommendations and guides for choosing the right books.
    </p>
    <p>
      Click here to see what books New York state recommends for various grade
      levels
    </p>
  </Layout>
)

export default Parents
