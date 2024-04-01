import { useParams } from "react-router-dom"

import { useMyContext } from "../../context/context"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/languageType"
import { useEffect } from "react"
import ShopingCart from "./ShopingCart/ShopingCart"
import MoreProducts from "./MoreProducts/MoreProducts"
import { BannerUi } from "../home/BannerUI/BannerUI"
import SummaryProducts from "./SummaryProducts/SummaryProducts"

const PageCart = () => {
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
    return <div className='text-4xl h-[100vh] flex items-center justify-center w-full uppercase'>...Loading</div>
  }
  return (
    <div className=''>
      <div className=' px-10 py-6 mb-10'>
        <section className=' px-6 flex max-lg:flex-col shadow-lg transition duration-500 rounded-md justify-between'>
          <ShopingCart />
          <SummaryProducts />
        </section>
        <MoreProducts />
      </div>
    </div>
  )
}
export default PageCart
