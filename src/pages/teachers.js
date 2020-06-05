import React from "react"
import BlobImgContainer from "../components/blobImgContainer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Teachers = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Teachers" />
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <BlobImgContainer
        src="connect.png"
        type="5"
        text="Media Connect"
        dest="https://ocmmc.insigniails.com/LibraryG"
      />
      <BlobImgContainer
        src="teachingbooks.png"
        type="7"
        text="Teachingbooks.net"
        dest="http://www.teachingbooks.net/"
      />
      <BlobImgContainer
        src="mailbox.jpg"
        type="2"
        text="The Mailbox"
        dest="http://themailbox.infobase.com/login?aid=16191"
      />
      <BlobImgContainer
        src="proquest.png"
        type="1"
        text="Proquest Ebooks"
        dest="https://ebookcentral.proquest.com/lib/ocmboces-ebooks/search.action"
      />
      <BlobImgContainer
        src="launchpacks.png"
        type="4"
        text="Brittanica Social Studies Launchpacks"
        dest="https://packs.eb.com//login?username=ics&password=library&target=%2Fsocial-studies"
      />
    </div>
    <div
      style={{
        fontFamily: "Spectral",
        fontWeight: "300",
        fontStyle: "italic",
        fontSize: "3rem",
        lineHeight: "3rem",
        marginTop: "100px",
        position: "relative",
      }}
    >
      "Education is not the filling of a pail but the lighting of a fire.”
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "#03c2fc",
          top: "-30px",
          left: "30px",
          zIndex: -1,
        }}
      ></div>
    </div>
    <div
      style={{
        fontFamily: "Spectral",
        fontWeight: "500",
        fontStyle: "normal",
        fontSize: "3rem",
        textAlign: "right",
      }}
    >
      – William Butler Yeats
    </div>
  </Layout>
)

export default Teachers
