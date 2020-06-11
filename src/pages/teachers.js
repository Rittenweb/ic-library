import React from "react"
import BlobImgContainer from "../components/blobImgContainer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Teachers = ({ location }) => {
  let username
  let password

  React.useEffect(() => {
    fetch("/.netlify/functions/getenv")
      .then(res => res.json())
      .then(data => {
        username = data.launchpacksUsername
        password = data.launchpacksPassword
      })
  }, [])

  return (
    <Layout path={location.pathname}>
      <SEO title="Teachers" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "space-between",
        }}
      >
        <BlobImgContainer
          src="mailbox.jpg"
          type="2"
          text="The Mailbox"
          dest="http://themailbox.infobase.com/login?aid=16191"
        />
        <BlobImgContainer
          src="teachingbooks.png"
          type="7"
          text="Teachingbooks.net"
          dest="http://www.teachingbooks.net/"
        >
          <a
            href="https://docs.google.com/document/d/13J_KPJbZIBhFmNhovdQmQjEbE6ei8D_n9yHo_81U_70/edit?usp=sharing"
            style={{ position: "absolute", bottom: "40px", left: "20px" }}
          >
            How to set up an account
          </a>
        </BlobImgContainer>
        <BlobImgContainer
          src="launchpacks.png"
          type="4"
          text="Brittanica School Launchpacks"
          dest={`https://packs.eb.com//login?username=${username}&password=${password}&target=%2Fsocial-studies`}
        />
        <BlobImgContainer
          src="proquest.png"
          type="1"
          text="Proquest Ebooks"
          dest="https://ebookcentral.proquest.com/lib/ocmboces-ebooks/search.action"
        />
        <BlobImgContainer
          src="connect.png"
          type="5"
          text="Media Connect"
          dest="https://ocmmc.insigniails.com/LibraryG"
        >
          <div style={{ position: "absolute", bottom: "10px", left: "30px" }}>
            Make sure popups are unblocked!
          </div>
        </BlobImgContainer>
        <BlobImgContainer
          src="engage.jpg"
          type="1"
          text="Engage NY"
          dest="https://www.engageny.org/"
        />
        <BlobImgContainer
          src="scholastic.png"
          type="2"
          text="Scholastic"
          dest="https://www.scholastic.com/home"
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
          “Education is not the filling of a pail but the lighting of a fire.”
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
          – William Butler Yeats
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
}

export default Teachers
