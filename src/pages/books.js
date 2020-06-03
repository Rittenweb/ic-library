import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import image from "../images/catalog.jpg"

const Books = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Books" />
    <h1>Books</h1>
    <p>
      You can find magic wherever you look. Sit back and relax, all you need is
      a book! - Dr. Seuss
    </p>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="img1"
          patternUnits="userSpaceOnUse"
          width="200px"
          height="200px"
          x="70px"
          y="80px"
        >
          <image href={image} x="0" y="0" width="300px" height="300px" />
        </pattern>
      </defs>
      <path
        fill="url(#img1)"
        stroke="#000000"
        strokeWidth="6"
        d="M44.8,-48.1C59.3,-41.2,73.2,-28.3,73.2,-14.9C73.3,-1.5,59.4,12.4,50.3,30C41.3,47.5,37,68.7,25.9,74C14.8,79.3,-3.2,68.6,-22.3,61.5C-41.5,54.5,-61.8,51,-72,38.9C-82.1,26.8,-82.1,6.2,-74.4,-9C-66.8,-24.1,-51.6,-33.8,-38,-40.9C-24.3,-48,-12.1,-52.6,1.5,-54.4C15.1,-56.1,30.2,-55.1,44.8,-48.1Z"
        transform="translate(100 100)"
      />
    </svg>
    <p>Link: Online Catalog</p>
    <p>Link: Overdrive</p>
    <p>Link: Interactive Ebooks</p>
  </Layout>
)

export default Books
