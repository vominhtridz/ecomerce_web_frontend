import axios from "axios"
import { RegisterUserTypes, LogginUserTypes } from "../typescript/UserTypes"

const api = "http://localhost:1000/users"

export const getUser = async () => await axios.get(`${api}`)
export const UserLoggedIn = async (payload: LogginUserTypes) =>
  await axios.post(`${api}/login`, payload)
export const RegisterUser = async (payload: RegisterUserTypes) =>
  await axios.post(`${api}/register`, payload)
