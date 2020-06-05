import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <div className="gwrapper">
        <h1
          style={{
            backgroundColor: "white",
          }}
        >
          Welcome to the Immaculate Conception School Library!
        </h1>
      </div>
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
      <div
        style={{
          fontSize: "4rem",
          lineHeight: "5rem",
          fontFamily: "Henny Penny, cursive",
        }}
      >
        The more that you{" "}
        <span
          style={{
            textShadow:
              "4px 4px 0 #d92027, 8px 8px 0 #ff9234, 12px 12px 0 #ffcd3c, 16px 16px 0 #35d0ba, 20px 20px 0 #3167ED",
            fontWeight: "bold",
          }}
        >
          read
        </span>
        , <br></br>the more things you will know. <br></br>The more that you
        learn,
        <br></br>the more places you'll go!
        <p
          style={{
            textAlign: "right",
            fontSize: "4rem",
            lineHeight: "5rem",
            fontFamily: "Henny Penny, cursive",
          }}
        >
          – Dr. Seuss
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
