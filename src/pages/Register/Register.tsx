import { useParams } from "react-router-dom"
import { useMyContext } from "../../context/context"
import { languageType } from "../../typescript/languageType"
import { ContainLanguages } from "../../languages/Languages"
import { useEffect } from "react"
import { BannerUi } from "../home/BannerUI/BannerUI"
import RegisterInput from "./Input/RegisterInput"

const PageRegister = () => {
  const { lang } = useParams()
  const { language, setLanguage, setLangCode } = useMyContext()
  //khi render ra component home kiểm tra link language in prams  để setup cho state ở usecontext và truyền đi qua
  //componet cha là defaultLayout để render ra header và footer
  useEffect(() => {
    if (lang && ContainLanguages.hasOwnProperty(lang)) {
      setLanguage(ContainLanguages[lang] as languageType)
      setLangCode(lang)
    }
  }, [setLanguage, setLangCode])
  // nếu ngôn ngữ = null thì xuất ra loading
  if (!language) {
    return (
      <div className='text-4xl h-[100vh] flex items-center justify-center w-full uppercase'>
        ...Loading
      </div>
    )
  }
  return (
    <div className=''>
      <BannerUi />
      <RegisterInput />
    </div>
  )
}
export default PageRegister
