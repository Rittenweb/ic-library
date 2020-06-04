import React from "react"
import BlobImgContainer from "../components/blobImgContainer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Parents = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Parents" />
    <p
      style={{
        fontFamily: "Spectral",
        fontWeight: "300",
        fontStyle: "italic",
        fontSize: "3rem",
        lineHeight: "3rem",
      }}
    >
      "Reading should not be presented to children as a chore or duty. It should
      be offered to them as a precious gift.”
    </p>
    <p
      style={{
        fontFamily: "Spectral",
        fontWeight: "500",
        fontStyle: "normal",
        fontSize: "3rem",
        textAlign: "right",
        marginBottom: "100px",
      }}
    >
      – Kate DiCamillo
    </p>
    <p style={{ fontSize: "1rem" }}>
      Looking for a "Just-Right" book for your child? Check out recommendations
      from these sources:
    </p>
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
  </Layout>
)

export default Parents
