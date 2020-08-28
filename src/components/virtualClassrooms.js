import React from "react"

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20vh",
      }}
    >
      <a href={"https://classroom.google.com/c/MTUyMjEzODA4ODI3?cjc=cbv4qej"}>
        <button
          className="classroom-button button-light"
          style={{
            background: "linear-gradient(145deg, #e8222a, #c31d23)",
          }}
        >
          K
        </button>
      </a>
      <a href={"https://classroom.google.com/c/MTUyMjIxMjAwODg5?cjc=b7rgnwh"}>
        <button
          className="classroom-button button-light"
          style={{
            background: "linear-gradient(145deg, #ff9c38, #e6832f)",
          }}
        >
          1st
        </button>
      </a>
      <a href={"https://classroom.google.com/c/MTUyMjIxMjAwOTE5?cjc=nx5upso"}>
        <button
          className="classroom-button button-light"
          style={{
            background: "linear-gradient(145deg, #ffdb40, #e6b936)",
          }}
        >
          2nd
        </button>
      </a>
      <a href={"https://classroom.google.com/c/MTUyMjMyOTM4Mjc5?cjc=aml3rb4"}>
        <button
          className="classroom-button button-light"
          style={{
            background: "linear-gradient(145deg, #20cfa3, #1bae89)",
          }}
        >
          3rd
        </button>
      </a>
      <a href={"https://classroom.google.com/c/MTUyMjM0MDE4OTI5?cjc=r3b534j"}>
        <button
          className="classroom-button button-dark"
          style={{
            background: "linear-gradient(145deg, #346efe, #2c5dd5)",
          }}
        >
          4th
        </button>
      </a>
      <a href={"https://classroom.google.com/c/MTUyMjMwNzAzMjg4?cjc=3wh3te4"}>
        <button
          className="classroom-button button-dark"
          style={{
            background: "linear-gradient(145deg, #331fa5, #2b1a8b)",
          }}
        >
          5th
        </button>
      </a>
      <a href={"https://classroom.google.com/c/MTUyMjM0MDI0NDUx?cjc=pzmafkj"}>
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
