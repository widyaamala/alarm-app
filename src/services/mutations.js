import API from "./API"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"

// const LOGIN_URL = "v1/authentication/login"

const login = () => {
  return useMutation({
    mutationFn: ({ payload, callBack }) => {
      let convertData = {
        // name: payload?.name,
        email: payload?.email,
      }
    
      localStorage.setItem("usdm", JSON.stringify(convertData ?? ""))
      if (callBack) callBack()
    },
  })
}

const logout = (callBack) => {
  localStorage.removeItem("usdm")
  if (callBack) callBack()
}

// const login = () => {
//   const navigate = useNavigate()
//   return useMutation({
//     mutationFn: async (payload) => {
//       const data = await API.post(import.meta.env.VITE_API + LOGIN_URL, payload)
//       return data
//     },
//     onSuccess: (res) => {
//       let convertData = {
//         token: encryptData(res.data?.token ?? "token not found"),
//         name: res.data?.name,
//         email: res.data?.email,
//       }

//       localStorage.setItem("usdm", JSON.stringify(convertData ?? ""))
//       ToastSucces('Successfully login!')

//       navigate("/alarm")
//     },
//     onError: (error) => {
//       ToastError(error?.response)
//     },
//   })
// }

const useServiceMutate = {
  login,
  logout
}

export default useServiceMutate
