import React from "react"

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "25vh",
      }}
    >
      <a href={"http://google.com"}>
        <button
          className="classroom-button button-light"
          style={{
            background: "linear-gradient(145deg, #e8222a, #c31d23)",
          }}
        >
          K
        </button>
      </a>
      <a href={"http://google.com"}>
        <button
          className="classroom-button button-light"
          style={{
            background: "linear-gradient(145deg, #ff9c38, #e6832f)",
          }}
        >
          1st
        </button>
      </a>
      <a href={"http://google.com"}>
        <button
          className="classroom-button button-light"
          style={{
            background: "linear-gradient(145deg, #ffdb40, #e6b936)",
          }}
        >
          2nd
        </button>
      </a>
      <a href={"http://google.com"}>
        <button
          className="classroom-button button-light"
          style={{
            background: "linear-gradient(145deg, #20cfa3, #1bae89)",
          }}
        >
          3rd
        </button>
      </a>
      <a href={"http://google.com"}>
        <button
          className="classroom-button button-dark"
          style={{
            background: "linear-gradient(145deg, #346efe, #2c5dd5)",
          }}
        >
          4th
        </button>
      </a>
      <a href={"http://google.com"}>
        <button
          className="classroom-button button-dark"
          style={{
            background: "linear-gradient(145deg, #331fa5, #2b1a8b)",
          }}
        >
          5th
        </button>
      </a>
      <a href={"http://google.com"}>
        <button
          className="classroom-button button-dark"
          style={{
            background: "linear-gradient(145deg, #2d2a36, #26232d)",
          }}
        >
          6th
        </button>
      </a>
    </div>
  )
}
