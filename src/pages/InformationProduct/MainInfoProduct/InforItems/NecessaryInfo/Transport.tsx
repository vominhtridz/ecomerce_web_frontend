import { useState } from "react"
import FreeShip from "..//..//..//..//..//images/icons/freeShipIcon.png"
import { Caricon, DownIcon } from "../../../../../images/centerIcons"
const Transport = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className='flex  my-2 text-[14px] leading-5'>
      <p className='pr-2'>Vận Chuyển</p>
      <section className='text-sm'>
        <nav className='flex items-center  pr-2 pl-7'>
          <img src={FreeShip} alt='' className='w-6 h-6' />
          <p className='px-2'>Miễn phí vận chuyển</p>
        </nav>
        <nav className='flex items-center text-[13px] py-1 pr-2 pl-5'>
          <p className='text-xl px-2 text-slate-600'>{Caricon}</p>
          <span className='px-2  text-slate-500'>
            <p className=''>Vận Chuyển Tới</p>
            <p className=''>Phí Vận Chuyển</p>
          </span>
          <span className='text-black '>
            <p className='flex items-center'>
              Xã bàu chinh huyện chau đức
              <div className='px-1'>{DownIcon}</div>
            </p>
            <p className='flex items-center hover:text-green-500'>
              0 - 32.400 VNĐ
              <div className='px-1'>{DownIcon}</div>
            </p>
          </span>
        </nav>
      </section>
    </div>
  )
}
export default Transport
