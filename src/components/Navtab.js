import React from "react"
import { Link } from "gatsby"

export default function Navtab({ name, dest, path }) {
  const inset = path === dest ? true : false
  let background = ""
  let gradient = ""
  let insetShadows = ""
  let color = "#2a2732"
  let textShadow = "1px 1px #fff8f0"

  switch (dest) {
    case "/":
      background = "#FFF8F0"
      gradient = "linear-gradient(145deg, #ffffff, #e6dfd8)"
      insetShadows =
        "inset 10px 10px 20px #706d6a, inset -10px -10px 20px #ffffff"
      break
    case "/books":
      background = "#d92027"
      gradient = "linear-gradient(145deg, #e8222a, #c31d23)"
      insetShadows =
        "inset 10px 10px 20px #570d10, inset -10px -10px 20px #ff333e"
      break
    case "/students":
      background = "#ff9234"
      gradient = "linear-gradient(145deg, #ff9c38, #e6832f)"
      insetShadows =
        "inset 10px 10px 20px #96561f, inset -10px -10px 20px #ffce49"
      break
    case "/teachers":
      background = "#ffcd3c"
      gradient = "linear-gradient(145deg, #ffdb40, #e6b936)"
      insetShadows =
        "inset 10px 10px 20px #705a1a, inset -10px -10px 20px #ffff5e"
      break
    case "/parents":
      background = "#1EC198"
      gradient = "linear-gradient(145deg, #20cfa3, #1bae89)"
      insetShadows =
        "inset 10px 10px 20px #0c4d3d, inset -10px -10px 20px #30fff3"
      break
    case "/research":
      background = "#3167ED"
      gradient = "linear-gradient(145deg, #346efe, #2c5dd5)"
      insetShadows =
        "inset 10px 10px 20px #162d68, inset -10px -10px 20px #4ca1ff"
      color = "#fff8f0"
      textShadow = "2px 1px #2a2732"
      break
    case "/tutorials":
      background = "#301D9A"
      gradient = "linear-gradient(145deg, #331fa5, #2b1a8b)"
      insetShadows =
        "inset 10px 10px 20px #150d44, inset -10px -10px 20px #4b2df0"
      color = "#fff8f0"
      textShadow = "2px 1px #2a2732"
      break
    case "/about":
      background = "#2A2732"
      gradient = "linear-gradient(145deg, #2d2a36, #26232d)"
      insetShadows =
        "inset 10px 10px 20px #121116, inset -10px -10px 20px #423d4e"
      color = "#fff8f0"
      textShadow = "2px 1px #2a2732"
      break
    default:
  }

  //Copper: B47741 Persian indigo: 301D9A

  return (
    <Link to={dest} style={{ textDecoration: "none" }}>
      <button
        className="banner-button"
        style={{
          color: color,
          textShadow: textShadow,
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
