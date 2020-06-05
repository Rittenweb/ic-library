import React from "react"
import BlobImgContainer from "../components/blobImgContainer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Parents = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Parents" />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexGrow: "0",
        marginBottom: "1.45rem",
      }}
    >
      <div className="gwrapper">
        <h2
          style={{
            fontSize: "2rem",
            lineHeight: "2.5rem",
            fontFamily: "Josefin Sans, sans-serif",
          }}
        >
          Looking for a "Just-Right" book for your child? <br></br>Check out
          recommendations from these sources:
        </h2>
      </div>
    </div>

    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <BlobImgContainer
        src="commonsense.png"
        type="6"
        text="Common Sense Media"
        dest="https://www.commonsensemedia.org/guide/essentialbooks"
      />
      <BlobImgContainer
        src="b.png"
        type="5"
        text="Brightly"
        dest="https://www.readbrightly.com/"
      />
      <BlobImgContainer
        src="engage.jpg"
        type="1"
        text="New York State"
        dest="https://www.engageny.org/resource/text-list-for-p-12-ela"
      />
    </div>
    <div
      style={{
        border: "1px solid black",
        marginTop: "100px",
        padding: "50px",
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: "Spectral",
          fontWeight: "300",
          fontStyle: "italic",
          fontSize: "3rem",
          lineHeight: "3rem",
        }}
      >
        “Reading should not be presented to children as a chore or duty. It
        should be offered to them as a precious gift.”{" "}
      </div>
      <div
        style={{
          fontFamily: "Spectral",
          fontWeight: "500",
          fontStyle: "normal",
          fontSize: "3rem",
          textAlign: "right",
          marginTop: "30px",
        }}
      >
        – Kate DiCamillo
      </div>
      <div
        style={{
          position: "absolute",
          top: "-30px",
          left: "30px",
          height: "100%",
          width: "100%",
          background: "linear-gradient(90deg, #3167ed, #1ec198)",
          zIndex: -1,
        }}
      ></div>
    </div>
  </Layout>
)

export default Parents
