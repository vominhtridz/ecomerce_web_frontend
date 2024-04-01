import { useParams } from "react-router-dom"
import NavLinkPage from "./NavLinkPage"
import { useMyContext } from "../../context/context"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/languageType"
import { useEffect } from "react"
import MainInfoProduct from "./MainInfoProduct/MainInfoProduct"
import InforUserSell from "./InforUserSell/InforUserSell"
import DetailProduct from "./DetailProduct/DetailProduct"
import ProductReviews from "./ProductReviews/ProductReviews"
import { NoSlashRight } from "../../images/centerIcons"
import MoreProducts from "../cart/MoreProducts/MoreProducts"

const PageInformationProduct = () => {
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
    <div className='w-full px-14 py-4'>
      <div className='flex items-center'>
        <NavLinkPage />
        <p className='px-2 text-black text-[11px]'>{NoSlashRight}</p>
        <p className='text-black'>Sét 45 chiếc móc nhôm người lớn</p>
      </div>
      <MainInfoProduct />
      <InforUserSell />
      <DetailProduct />
      <ProductReviews />

      <MoreProducts />
    </div>
  )
}
export default PageInformationProduct
