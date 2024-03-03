import {
  FC,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { ContainLanguages } from "../languages/Languages"
import { useLocation } from "react-router-dom"
interface myproviderType {
  children: ReactElement
}
const mycontext = createContext<object | null>({})

const MyProvider: FC<myproviderType> = ({ children }) => {
  const [language, setLanguage] = useState<object>({})
  const location = useLocation()
  useEffect(() => {
    // select path browser and loop over array containlanguages to get Shortcode then assign to state language

    let path = location.pathname.slice(1)
    for (let objLang of ContainLanguages) {
      for (let shortCode in objLang) {
        if (path === "") {
          // select default language is vietnam
          setLanguage(objLang.defaultLang)
        } else if (shortCode === path) {
          setLanguage(objLang[shortCode])
        }
      }
    }
  }, [language])
  console.log(language)
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
