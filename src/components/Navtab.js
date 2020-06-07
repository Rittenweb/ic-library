import React from "react"
import { Link } from "gatsby"

export default function Navtab({ name, dest, path }) {
  const inset = path === dest ? true : false
  let background = ""
  let gradient = ""
  let insetShadows = ""

  switch (true) {
    case dest === "/" || dest === "/parents":
      background = "#d92027"
      gradient = "linear-gradient(145deg, #e8222a, #c31d23)"
      insetShadows =
        "inset 10px 10px 20px #570d10, inset -10px -10px 20px #ff333e"
      break
    case dest === "/books" || dest === "/research":
      background = "#ff9234"
      gradient = "linear-gradient(145deg, #ff9c38, #e6832f)"
      insetShadows =
        "inset 10px 10px 20px #96561f, inset -10px -10px 20px #ffce49"
      break
    case dest === "/students" || dest === "/tutorials":
      background = "#ffcd3c"
      gradient = "linear-gradient(145deg, #ffdb40, #e6b936)"
      insetShadows =
        "inset 10px 10px 20px #705a1a, inset -10px -10px 20px #ffff5e"
      break
    case dest === "/teachers" || dest === "/about":
      background = "#1EC198"
      gradient = "linear-gradient(145deg, #20cfa3, #1bae89)"
      insetShadows =
        "inset 10px 10px 20px #0c4d3d, inset -10px -10px 20px #30fff3"
      break
    default:
  }

  return (
    <Link to={dest} style={{ textDecoration: "none" }}>
      <button
        className="banner-button"
        style={{
          background: inset ? background : gradient,
          boxShadow: inset
            ? insetShadows
            : "10px 10px 20px #2751bb, -10px -10px 20px #3b7dff",
        }}
      >
        {name}
      </button>
    </Link>
  )
}
