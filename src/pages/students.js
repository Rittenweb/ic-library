import React from "react"
import BlobImgContainer from "../components/blobImgContainer"
import VirtualClassrooms from "../components/virtualClassrooms"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Students = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Students" />
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
      >
        <div style={{ position: "absolute", bottom: "10px", left: "20px" }}>
          Students need class code to access
        </div>
      </BlobImgContainer>
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

    <div
      style={{
        fontFamily: "Playfair Display SC, serif",
        fontSize: "3rem",
        lineHeight: "3rem",
        fontWeight: "400",
        display: "flex",
        flexDirection: "column",
        marginTop: "20vh",
      }}
    >
      <div style={{ alignSelf: "flex-start" }}>
        “Today a <span className="image-text">Reader</span>.{" "}
      </div>
      <div style={{ alignSelf: "flex-end" }}>
        Tomorrow a <span className="image-text">Leader</span>.”
      </div>
      <div style={{ marginTop: "40px", alignSelf: "flex-end" }}>
        – Margaret Fuller
      </div>
    </div>
  </Layout>
)

export default Students
