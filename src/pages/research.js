import React from "react"
import BlobImgContainer from "../components/blobImgContainer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Research = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Research" />
    <h1>Research</h1>
    <p>"Somewhere, something incredible is waiting to be known. " Carl Sagan</p>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
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
        src="natlgeo.jpg"
        type="5"
        text="Natl Geographic Kids"
        dest="https://kids.nationalgeographic.com/"
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
  </Layout>
)

export default Research
