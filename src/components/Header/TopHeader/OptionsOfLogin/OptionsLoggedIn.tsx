import { useNavigate } from "react-router-dom"
import { useMyContext } from "../../../../context/context"
import Cookies from "universal-cookie"
import { MouseEvent } from "react"
interface setLoggedInTypes {
  setLoggedIn: (loggin: boolean) => void
}
const getOptionsLoggedIn = {
  myAccount: "Tài khoản của tôi",
  Shopping: "Đơn Mua",
  loggOut: "Đăng Xuất",
}
const OptionLoggedIn = ({ setLoggedIn }: setLoggedInTypes) => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const { langCode } = useMyContext()

  const handleLogOut = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    cookies.remove("loggedIn", { path: "/" })
    localStorage.removeItem("bacsicUsers")
    navigate(`/${langCode}`)
    setLoggedIn(false)
  }
  const handleShoping = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    navigate(`/${langCode}/cart`)
  }
  const handleNaviMyAccount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`/${langCode}/user/account/profile`)
  }
  return (
    <div className='z-30 font-normal w-full py-2 text-sm absolute b-0 left-0 flex-wrap shadow-lg transition duration-500 rounded lg bg-white'>
      <button className='hover:bg-slate-50 py-1.5 block hover:text-green-500 w-full ' onClick={handleNaviMyAccount}>
        {getOptionsLoggedIn.myAccount}
      </button>
      <button className='hover:bg-slate-50 py-1.5 block hover:text-green-500  w-full' onClick={handleShoping}>
        {getOptionsLoggedIn.Shopping}
      </button>
      <button className='hover:bg-slate-50 py-1.5 block hover:text-green-500  w-full' onClick={handleLogOut}>
        {getOptionsLoggedIn.loggOut}
      </button>
    </div>
  )
}
export default OptionLoggedIn
