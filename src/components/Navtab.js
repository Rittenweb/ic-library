import React from "react"
import { Link } from "gatsby"

export default function Navtab({ name, dest, path }) {
  console.log(path)
  const color = path === dest ? "blue" : "green"

  return (
    <Link to={dest} style={{ color: "white", textDecoration: "none" }}>
      <button
        style={{
          padding: "10px",
          border: "2px solid black",
          margin: "10px",
          borderRadius: "3px",
          backgroundColor: `${color}`,
          color: "white",
          cursor: "pointer",
        }}
      >
        {name}
      </button>
    </Link>
  )
}
