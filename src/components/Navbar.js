import React from "react"
import Navtab from "./Navtab"

export default function Navbar({ path }) {
  return (
    <div style={{ display: "flex" }}>
      <Navtab name="Home" dest="/" path={path} />
      <Navtab name="Books" dest="/app/books" path={path} />
      <Navtab name="Students" dest="/students" path={path} />
      <Navtab name="Teachers" dest="/app/teachers" path={path} />
      <Navtab name="Parents" dest="/parents" path={path} />
      <Navtab name="Research" dest="/research" path={path} />
      <Navtab name="Tutorials" dest="/tutorials" path={path} />
      <Navtab name="About" dest="/about" path={path} />
    </div>
  )
}
