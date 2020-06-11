let domainPassword = '';

const isBrowser = () => typeof window !== "undefined"

isBrowser() && fetch("/.netlify/functions/getenv")
  .then(res => res.json())
  .then(data => {
    domainPassword = data.domainPassword
  })

export const getCurrentPassword = () =>
  isBrowser() && window.localStorage.getItem("password") ?
  JSON.parse(window.localStorage.getItem("password")) : {}

export const setCurrentPassword = password =>
  window.localStorage.setItem("password", JSON.stringify(password))

export const isLoggedIn = () => {
  const password = getCurrentPassword()

  return password === domainPassword
}