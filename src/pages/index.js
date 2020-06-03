import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <h1>Welcome to the Immaculate Conception School Library!</h1>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <ul>
        <li>The online school library catalog</li>
        <li>E-books from our OverDrive collection</li>
        <li>
          A variety of age-appropriate research databases for our students
        </li>
        <li>Educational resources for teachers</li>
        <li>
          Book recommendations for parents wanting to help their child find a
          "just-right" book
        </li>
        <li>And much more!</li>
      </ul>
      <p>
        The more that you read, the more things you will know. The more that you
        learn, the more places you'll go! Dr. Seuss
      </p>
      <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/books/">Go to page 2</Link> <br />
      <Link to="/students/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage