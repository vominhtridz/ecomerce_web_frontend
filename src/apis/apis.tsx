import axios from "axios"

const api = "http://localhost:1000"

export const getLanguage = async () => await axios.get(`${api}/languages`)
