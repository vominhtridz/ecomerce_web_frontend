import {
  FC,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react"
import { ContainLanguages, defaultLanguage } from "../languages/Languages"
import { useLocation } from "react-router-dom"
import { myproviderType } from "../typescript/contextType"
import { languageType } from "../typescript/languageType"
const mycontext = createContext<languageType | null>(null)
interface defaultLanguageType extends languageType {
  setLanguage: () => void
}

const MyProvider: FC<myproviderType> = ({ children }) => {
  const location = useLocation()
  let path = location.pathname.slice(1)
  ///SET DEFAULT LANGUAGE
  function SetDefaultLanguage() {
    for (let objLang of ContainLanguages) {
      for (let shortCode in objLang) {
        if (shortCode === path) {
          return objLang[shortCode]
        }
      }
    }
  }
  const [language, setLanguage] = useState<defaultLanguageType | any>(
    SetDefaultLanguage() || defaultLanguage,
  )

  useEffect(() => {
    // take path browser and loop over array ContainLanguages to take into shortKey language
    // finnally assign language into state language if path browser = shortKey
    for (let objLang of ContainLanguages) {
      for (let shortCode in objLang) {
        if (shortCode === path) {
          setLanguage(objLang[shortCode])
        }
      }
    }
  }, [language])
  useLayoutEffect(() => {
    console.log("hello")
  }, [])
  return (
    <mycontext.Provider value={{ language, setLanguage }}>
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
