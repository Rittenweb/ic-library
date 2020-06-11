import React from "react"
import { navigate } from "gatsby"
import { setCurrentPassword, isLoggedIn } from "../services/auth"

export default function Login({ dest }) {
  let [password, setPassword] = React.useState("")

  const handleUpdate = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setCurrentPassword(password)
  }

  if (isLoggedIn()) {
    if (dest === "/app/books") {
      navigate(`/app/books`)
    } else if (dest === "/app/teachers") {
      navigate(`/app/teachers`)
    }
  }

  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexGrow: "0",
          marginBottom: "1.45rem",
        }}
      >
        <div className="gwrapper">
          <h2
            style={{
              fontSize: "2rem",
              lineHeight: "2.5rem",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            What's the Password?
          </h2>
        </div>
      </div>
      <form
        method="post"
        onSubmit={e => {
          handleSubmit(e)
          if (dest === "/app/books") {
            navigate(`/app/books`)
          } else if (dest === "/app/teachers") {
            navigate(`/app/teachers`)
          }
        }}
      >
        <input
          type="password"
          name="password"
          onChange={handleUpdate}
          style={{ marginRight: "20px" }}
        />
        <input
          type="submit"
          value="Submit"
          style={{ fontFamily: "Josefin Sans" }}
        />
      </form>
    </div>
  )
}
