import React from "react"
import { Link } from "gatsby"

export default function Navtab({ name, dest, path }) {
  const inset = path === dest ? true : false

  return (
    <Link to={dest} style={{ color: "white", textDecoration: "none" }}>
      <button
        style={{
          padding: "10px",
          margin: "10px",
          border: "none",
          borderRadius: "4px",
          background: inset
            ? "#3167ED"
            : `linear-gradient(145deg, #346efe, #2c5dd5)`,
          color: "white",
          cursor: "pointer",
          textShadow: "2px 1px black",
          boxShadow: inset
            ? "inset 7px 7px 18px #162d68, inset -7px -7px 18px #4ca1ff"
            : "7px 7px 18px #162d68, -7px -7px 18px #4ca1ff",
        }}
      >
        {name}
      </button>
    </Link>
  )
}
