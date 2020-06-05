import React from "react"
import { Link } from "gatsby"

export default function Navtab({ name, dest, path }) {
  const inset = path === dest ? true : false

  return (
    <Link to={dest} style={{ color: "#fff8f0", textDecoration: "none" }}>
      <button
        className="banner-button"
        style={{
          background: inset
            ? "#3167ED"
            : `linear-gradient(145deg, #346efe, #2c5dd5)`,
          boxShadow: inset
            ? "inset 7px 7px 18px #162d68, inset -7px -7px 18px #4ca1ff"
            : "7px 7px 18px #2751bb, -7px -7px 18px #3b7dff",
        }}
      >
        {name}
      </button>
    </Link>
  )
}
