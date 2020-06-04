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
            ? "#55b4dd"
            : `linear-gradient(145deg, #5bc1ec, #4da2c7)`,
          color: "white",
          cursor: "pointer",
          boxShadow: inset
            ? "inset 7px 7px 18px #3c7e9b, inset -7px -7px 18px #6feaff"
            : "7px 7px 18px #3c7e9b, -7px -7px 18px #6feaff",
        }}
      >
        {name}
      </button>
    </Link>
  )
}
