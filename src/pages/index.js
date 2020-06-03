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
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
      </p>
      <p>
        This website was designed for you to access many useful resources,
        including:
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
