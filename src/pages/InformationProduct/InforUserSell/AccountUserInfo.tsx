import { Link } from "react-router-dom"
import ChatNowBtn from "../../../components/button/Product_Infor/ChatNowBtn"
import LookAtShop from "../../../components/button/Product_Infor/LookAtShopBtn"
import img from "..//..//..//images/Home_Category/Book_Store.png"
import { useMyContext } from "../../../context/context"
import { ShopWhiteIcon } from "../../../images/centerIcons"

function AccountUserInfo() {
  const { langCode } = useMyContext()
  return (
    <nav className='flex items-center border-r border-slate-200 pr-14'>
      <Link to={`/${langCode}/tranminhtro`} className='mx-4 w-20 h-20 '>
        {img ? (
          <img
            src={img}
            className='rounded-full w-full h-full  border border-slate-200 object-contain bg-slate-50'
            alt=''
          />
        ) : (
          <p className='rounded-full w-full h-full  border text-slate-400 text-4xl flex items-center justify-center border-slate-200 object-contain bg-slate-50'>
            {ShopWhiteIcon}
          </p>
        )}
      </Link>
      <div className='text-left'>
        <h6 className='text-base'>Huy tưởng</h6>
        <p className='text-sm text-slate-500 pb-1'>Online 10 phút trước</p>
        <span className='flex items-center'>
          <ChatNowBtn />
          <LookAtShop />
        </span>
      </div>
    </nav>
  )
}

export default AccountUserInfo
