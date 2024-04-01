import { useParams } from "react-router-dom"
import AccountRecommend from "./AccountRecommend"
import DescribeInforShop from "./DescribeInforShop"
import SalesUserContent from "./SalesUserContent/SalesUserContent"
import SalesUserInfor from "./SalesUserInfor/SalesUserInfor"
import SalesUserNavigate from "./SalesUserNavigate"
import SalesUserSideBar from "./SalesUserSideBar/SalesUserSideBar"
import UserVoucher from "./UserVoucher"
import { useMyContext } from "../../context/context"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/languageType"
import { useEffect } from "react"
import SearchResult from "../Search/Content/SearchResult/SearchResult"

function SalesUser() {
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
      <div className='bg-white  px-16 pt-6'>
        <SalesUserInfor />
        <SalesUserNavigate />
      </div>
      {/* <UserVoucher /> */}
      <DescribeInforShop />
      <div className='flex  my-10 px-14'>
        <SalesUserSideBar />
        <SearchResult />
      </div>
    </div>
  )
}

export default SalesUser
