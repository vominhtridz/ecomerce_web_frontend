import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/languageType"
import { useMyContext } from "../../context/context"
import SideBar from "./SideBar/SideBar"
import PageVoucherStore from "./Content/SpecialOffers/VoucherStore/PageVoucherStore"
import PageUserNotifyCations from "./Content/Account/NotifyCations/NotifyCations"

export const PageUsers = () => {
  const { lang } = useParams()
  const { language, setLanguage, setLangCode } = useMyContext()
  const [PageUsers, setPageUsers] = useState<[]>()
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
    return <div className='text-4xl h-[100vh] flex items-center justify-center w-full uppercase'>...Loading</div>
  }
  return (
    <section className='flex  px-10 py-14 '>
      <SideBar />
      {/* <PageProfile /> */}
      <PageUserNotifyCations />
    </section>
  )
}
export default PageUsers
