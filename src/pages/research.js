import React from "react"
import BlobImgContainer from "../components/blobImgContainer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Research = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Research" />
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "440px" }}>
      <BlobImgContainer
        src="britannicaschool.png"
        type="6"
        text="Britannica School"
        dest="https://galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_ce_immcp&db=EBschool"
      />
      <BlobImgContainer
        src="infobits.png"
        type="4"
        text="Gale Kids Infobits"
        dest="http://galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_ce_immcp&db=ITKE"
      />
      <BlobImgContainer
        src="galeincontext.png"
        type="1"
        text="Gale in Context"
        dest="http://galesupport.com/novelGeo/novelGeoLink.php?loc=nysl_ce_immcp&db=MSIC"
      />
      <BlobImgContainer
        src="kiddle.png"
        type="1"
        text="Kiddle"
        dest="https://kiddle.co"
      />
      <BlobImgContainer
        src="ducksters.png"
        type="6"
        text="Ducksters.com"
        dest="https://www.ducksters.com/"
      />
      <BlobImgContainer
        src="noodle.jpg"
        type="5"
        text="Noodle Tools"
        dest="https://my.noodletools.com/logon/signin"
      />
    </div>
    <div
      style={{
        position: "absolute",
        bottom: "-300px",
        left: "calc(((100vw - 100%) / 2) * -1)",
        background: "linear-gradient(to top, black, white",
        height: "300px",
        width: "calc(100vw - 10px)",
      }}
    ></div>
    <div
      className="starry"
      style={{
        position: "absolute",
        bottom: "-600px",
        left: "calc(((100vw - 100%) / 2) * -1)",
        width: "calc(100vw - 10px)",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Exo",
        color: "#efefbb",
        fontSize: "3rem",
        lineHeight: "3.3rem",
        boxShadow: "0px 0px 1000px black",
      }}
    >
      <p
        style={{
          background: "linear-gradient(to right, #efefbb, #d4d3dd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginLeft: "30px",
          fontStyle: "italic",
          fontWeight: "300",
        }}
      >
        "Somewhere, something incredible is waiting to be known. "
      </p>
      <p
        style={{
          background: "linear-gradient(to right, #efefbb, #d4d3dd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          alignSelf: "flex-end",
          marginRight: "30px",
          fontStyle: "normal",
          fontWeight: "500",
        }}
      >
        – Carl Sagan
      </p>
    </div>
  </Layout>
)

export default Research
