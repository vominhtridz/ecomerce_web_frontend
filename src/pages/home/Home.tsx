import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/languageType"
import { BannerUi } from "./BannerUI/BannerUI"
import { HomeFeaturesUI } from "./HomeFeaturesUi/HomeFeaturesUI"
import ProductsUI from "./ProductsUI/ProductsUI"
import { ProductsRecommendUI } from "./ProductsRecommendUI"
import { useMyContext } from "../../context/context"
import Category from "./Category/Category"
const Home: FC = () => {
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
      {language && (
        <center className=' w-full overflow-hidden'>
          <BannerUi />
          <Category />
          <section className='text-center px-36 text-[20px] max-lg:px-2'>{language?.center.introduce}</section>
          <section className='list-none flex items-center lg:px-16 max-lg:px-2 max-sm:px-2 max-md:px-16 my-16'>
            <HomeFeaturesUI />
          </section>
          <section className='py-6'>
            <ProductsRecommendUI />
          </section>
          <section className='products'>
            <ProductsUI />
          </section>
        </center>
      )}
    </div>
  )
}

export default Home
