import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Books from "./books"
import Teachers from "./teachers"
import Layout from "../components/layout"
import Login from "../components/login"

const App = ({ location }) => {
  const pathRef = React.useRef("")

  if (location.pathname === "/app/books") {
    pathRef.current = "/app/books"
  } else if (location.pathname === "/app/teachers") {
    pathRef.current = "/app/teachers"
  }

  return (
    <Layout path={pathRef.current}>
      <Router>
        <PrivateRoute path="/app/books" component={Books} />
        <PrivateRoute path="/app/teachers" component={Teachers} />
        <Login path="/app/login" dest={pathRef.current} />
      </Router>
    </Layout>
  )
}
export default App
