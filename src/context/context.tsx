import { FC, createContext, useContext, useState } from "react"
import { CreateContextTypes, myproviderType } from "../typescript/contextType"
import { languageType } from "../typescript/languageType"
import { defaultLanguage } from "../languages/Languages"
import { useLocation } from "react-router-dom"
import { usersTypes } from "../typescript/UserTypes"
const mycontext = createContext<CreateContextTypes>({
  visibleMess: false,
  langCode: "",
  dataUser: null,
  language: null,
  setDataUser: () => {},
  setLanguage: () => {},
  setVisibleMess: () => {},
  setLangCode: () => {},
})
const MyProvider: FC<myproviderType> = ({ children }) => {
  const path = useLocation().pathname
  const [language, setLanguage] = useState<languageType | null>(path === "/" ? defaultLanguage : null)
  const [visibleMess, setVisibleMess] = useState<boolean>(false)
  const [dataUser, setDataUser] = useState<usersTypes | null>(null)
  const [langCode, setLangCode] = useState<string>(path === "/" ? "vi" : "")
  return (
    <mycontext.Provider
      value={{ dataUser, setDataUser, setVisibleMess, visibleMess, langCode, setLangCode, language, setLanguage }}
    >
      {children}
    </mycontext.Provider>
  )
}

const useMyContext = () => {
  const context = useContext(mycontext)
  if (!context) {
    throw new Error("usecontext is within my provicer! or not created context!")
  }
  return context
}
export { useMyContext, MyProvider }
