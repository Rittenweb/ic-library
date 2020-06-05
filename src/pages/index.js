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
          lineHeight: "5.2rem",
          fontFamily: "Henny Penny, cursive",
          marginTop: "100px",
        }}
      >
        The more that you{" "}
        <span
          style={{
            fontSize: "5rem",
            color: "#d92027",
            textShadow:
              "3px 3px 0 #ff9234, 6px 6px 0 #ffcd3c, 9px 9px 0 #35d0ba, 12px 12px 0 #3167ED, 16px 16px 0 #2A2732",
            fontWeight: "bold",
          }}
        >
          read{" "}
        </span>{" "}
        ,<br></br>the more things you will{" "}
        <span
          style={{
            fontSize: "5rem",
            color: "#ffcd3c",
            textShadow:
              "3px 3px 0 #ff9234, 6px 6px 0 #d92027, 9px 9px 0 #35d0ba, 12px 12px 0 #3167ED, 16px 16px 0 #2A2732",
            fontWeight: "bold",
          }}
        >
          know
        </span>{" "}
        . <br></br>The more that you{" "}
        <span
          style={{
            fontSize: "5rem",
            color: "#35d0ba",
            textShadow:
              "3px 3px 0 #3167ED, 6px 6px 0 #ffcd3c, 9px 9px 0 #ff9234, 12px 12px 0 #d92027, 16px 16px 0 #2A2732",
            fontWeight: "bold",
          }}
        >
          learn
        </span>{" "}
        ,<br></br>the more places you'll{" "}
        <span
          style={{
            fontSize: "5rem",
            color: "#3167ED",
            textShadow:
              "3px 3px 0 #35d0ba, 6px 6px 0 #ffcd3c, 9px 9px 0 #ff9234, 12px 12px 0 #d92027, 16px 16px 0 #2A2732",
            fontWeight: "bold",
          }}
        >
          go!!
        </span>
        <p
          style={{
            textAlign: "right",
            fontSize: "4rem",
            lineHeight: "5rem",
            fontFamily: "Henny Penny, cursive",
            marginTop: "20px",
          }}
        >
          – Dr. Seuss
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
