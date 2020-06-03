import React from "react"
import { Link } from "gatsby"

export default function Navtab({ name, dest, path }) {
  console.log(path)
  const color = path === dest ? "blue" : "green"

  return (
    <Link to={dest} style={{ color: "white", textDecoration: "none" }}>
      <div
        style={{
          padding: "10px",
          border: "2px solid black",
          margin: "10px",
          borderRadius: "3px",
          backgroundColor: `${color}`,
        }}
      >
        {name}
      </div>
    </Link>
  )
}
