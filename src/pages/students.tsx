// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Students: React.FC<PageProps<DataProps>> = ({ data, path, location }) => (
  <Layout path={location.pathname}>
    <SEO title="Using TypeScript" />
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <Link to="/">Go back to the homepage</Link>
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
