export const isBrowser = () => typeof window !== "undefined"

export const getCurrentPassword = () =>
  isBrowser() && window.localStorage.getItem("password") ?
  JSON.parse(window.localStorage.getItem("password")) : {}

export const setCurrentPassword = password =>
  window.localStorage.setItem("password", JSON.stringify(password))

export const isLoggedIn = () => {
  const password = getCurrentPassword()

  return password === 'books'
}