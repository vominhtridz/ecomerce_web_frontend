import { useState } from "react"
import FollowBtn from "../../../components/button/FollowBtn"
import FollowedBtn from "../../../components/button/FollowedBtn"
import img from "..//..//..//images/products/USHSF150_Present.jpg"

import Online from "../../../components/Input/Online"
import InforItem from "./InforItem"
import { ShopWhiteIcon } from "../../../images/centerIcons"

const SalesUserInfor = () => {
  const [follow, setFollow] = useState<boolean>(false)
  const handleFollowed = () => {
    setFollow(false)
  }
  const handleFollow = () => {
    setFollow(true)
  }
  return (
    <section className='flex '>
      <div className='bg-violet-900 px-4  py-3 rounded-sm w-[25rem]'>
        <div className='pl-6 flex'>
          {img ? (
            <img src={img} alt='' className='w-14 h-14 bg-slate-50 rounded-full border border-slate-300' />
          ) : (
            <p className='object w-full h-[350px] rounded-sm text-slate-500'>{ShopWhiteIcon}</p>
          )}
          <nav className='text-white text-[11px] px-3'>
            <h2 className='text-lg p-0'>Anhduong02090101</h2>
            <Online />
            {/* <Offline/> */}
          </nav>
        </div>
        <div className='py-2 '>
          {follow ? <FollowedBtn handleFollowed={handleFollowed} /> : <FollowBtn handleFollow={handleFollow} />}
        </div>
      </div>
      {/* thông tin người dùng */}
      <InforItem />
    </section>
  )
}

export default SalesUserInfor
