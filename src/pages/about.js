import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="About" />
    <h1>About</h1>
    <h2>The Mission of the Immaculate Conception School Library is to:</h2>
    <ul>
      <li>
        Give students and teachers access to a wide variety of books and
        information in multiple formats.
      </li>

      <li>
        Encourage an appreciation for literature and a love of reading in a
        comfortable, reader-friendly environment.
      </li>

      <li>
        Connect and reinforce what students are learning in their academic
        classes and provide additional resources to enhance their knowledge and
        understanding.
      </li>

      <li>Develop and build upon research skills each year.</li>

      <li>
        Prepare students to use information and technology safely, ethically,
        and responsibly.
      </li>
    </ul>
    <h2>Circulation Policy:</h2>
    <ul>
      <li>
        Students are encouraged to check out books each library class, which
        meets once a week.
      </li>

      <li>
        Book loans are for two weeks, and students may renew a book if they need
        more time.
      </li>

      <li>
        The library is open to students Tuesday, Wednesday, and Thursday
        mornings before school (8:30-9:00am) and after-school (3:00-3:30pm) if
        they would like to use the space to study, read, or check out library
        books.
      </li>

      <li>
        PreK - 1st grade students may check out one library book per week.
      </li>

      <li>
        2nd - 6th grade students may check out two library books per week.
      </li>
    </ul>
  </Layout>
)

export default About
