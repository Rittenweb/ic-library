import React from "react"
import BlobImgContainer from "../components/blobImgContainer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Students = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Students" />
    <h1>Students</h1>
    <p>"Today a Reader. Tomorrow a Leader." Margaret Fuller</p>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <BlobImgContainer
        src="wonder.jpg"
        type="7"
        text="Wonderopolis"
        dest="https://www.wonderopolis.org/"
      />
      <BlobImgContainer
        src="ll.jpg"
        type="6"
        text="Legends of Learning"
        dest="https://app.legendsoflearning.com/login"
      />
      <BlobImgContainer
        src="magictreehous.png"
        type="1"
        text="Magic Treehouse"
        dest="https://www.magictreehouse.com/"
      />
      <BlobImgContainer
        src="epic2.png"
        type="4"
        text="Epic"
        dest="https://www.getepic.com/"
      />
      <BlobImgContainer
        src="science.jpg"
        type="2"
        text="Science for Kids"
        dest="http://sciencekids.co.nz/"
      />
      <BlobImgContainer
        src="natlgeo.jpg"
        type="5"
        text="Natl Geographic Kids"
        dest="https://kids.nationalgeographic.com/"
      />
    </div>
  </Layout>
)

export default Students
