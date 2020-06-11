import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlobImgContainer from "../components/blobImgContainer"

const Books = ({ location }) => {
  let username
  let password

  React.useEffect(() => {
    fetch("/.netlify/functions/getenv")
      .then(res => res.json())
      .then(data => {
        username = data.ebooksUsername
        password = data.ebooksPassword
      })
  }, [])

  const dynamicLink = function dynamicLink(e) {
    e.preventDefault()
    window.location.href = `https://rosenlearningcenter.com/login?username=${username}&password=${password}`
  }

  return (
    <Layout path={location.pathname}>
      <SEO title="Books" />
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "140px" }}>
        <BlobImgContainer
          src="catalog.jpg"
          type="4"
          text="Catalog"
          dest="http://slsopaca.mlasolutions.com/m5/catalog/?installation=SDIC"
        />
        <BlobImgContainer
          src="overdrive.png"
          type="6"
          text="Overdrive"
          dest="https://ocmboces.libraryreserve.com/10/45/en/SignIn2.htm?branchid=1125&URL=Default.htm"
        >
          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              fontSize: ".75rem",
            }}
          >
            Username = 1st initial of 1st name plus last name (ex: ewoodhead for
            Eleanor Woodhead). Password = books
            <div className="gwrapper"></div>
          </div>
        </BlobImgContainer>
        <BlobImgContainer
          src="ebooks.jpg"
          type="1"
          text="Interactive Ebooks"
          dest="#"
          onClick={dynamicLink}
        />
      </div>
      <div
        style={{
          fontFamily: "Miltonian Tattoo, cursive",
          fontSize: "2.75rem",
          lineHeight: "3rem",
          marginTop: "50px",
        }}
      >
        <div>
          You can find <span className="magic">magic</span> wherever you look.
        </div>
        <div>
          Sit back and relax, all you need is a{" "}
          <span className="magic">book!</span>
        </div>
        <div style={{ textAlign: "right", marginTop: "30px" }}>- Dr. Seuss</div>
      </div>
    </Layout>
  )
}
export default Books
