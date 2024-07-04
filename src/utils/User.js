export const getUser = () => {
  const user = JSON.parse(localStorage.getItem("usdm"))
  if (user) {
    return user
  }
  return null
}
