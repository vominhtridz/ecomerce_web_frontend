import logo from "..//..//..//images/logo/logo.png"
import Search from "./Search/Search"
import CartLink from "./CartLink"
import LanguageSelector from "../LanguageSelector/LanguageSelector"
import OptionsOfLogin from "./OptionsOfLogin/OptionsOfLogin"
import { useMyContext } from "../../../context/context"
import { useNavigate } from "react-router-dom"
const TopHeader = () => {
  const { langCode } = useMyContext()
  const navigate = useNavigate()
  const handleNavi = () => {
    navigate(`/${langCode}`)
  }
  return (
    <div className=''>
      <div className='w-full max-md:text-[12px] lg:hidden max-md:pr-2 justify-end pr-6 flex items-center'>
        <OptionsOfLogin />
        <LanguageSelector />
      </div>
      <section className='flex items-center max-lg:flex-wrap px-6 max-sm:px-1.5 py-2 text-sm font-semibol'>
        <button
          onClick={handleNavi}
          className='w-[400px] max-lg:w-[300px] justify-between flex items-center
          max-sm:w-[120px] max-md:w-[200px] py-1'
        >
          <img src={logo} alt='logo' className='w-full' />
          <div className='lg:hidden'>
            <CartLink />
          </div>
        </button>
        <div className='max-lg:w-full flex justify-items-center max-lg:hidden'>
          <CartLink />
        </div>
        <Search />

        <div className='flex items-center max-lg:hidden'>
          <OptionsOfLogin />
          <LanguageSelector />
        </div>
      </section>
    </div>
  )
}
export default TopHeader
