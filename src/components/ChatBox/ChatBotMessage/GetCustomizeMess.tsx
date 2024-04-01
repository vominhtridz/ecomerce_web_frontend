import { ArrowRight } from "../../../images/centerIcons"
import img from "..//..//..//images/products/USCBP300_BigSize.jpg"

const GetCustomizeMess = () => {
  return (
    <div className='absolute top-5 left-0 py-3 px-4 bg-white shadow rounded-sm ' onClick={e => e.stopPropagation()}>
      <h2 className='border-b whitespace-nowrap border-slate-200 text-base flex items-center pr-6 py-2'>
        <img src={img} alt='' className='w-8 h-8 rounded-full ' />
        <p className='px-2'>Shop Beauty</p>
      </h2>
      <div className='py-2 border-b border-slate-200'>
        <nav className='text-[13px] flex items-center py-1.5 justify-between '>
          <p className='pr-8'>Tắt thông báo</p>
          <div className='bg-[rgba(0,0,0,0.2)] relative rounded-full px-[15px] py-2'>
            <p className='w-1/2 h-full  rounded-full absolute top-0 left-[2px] bg-white'></p>
          </div>
        </nav>
        <nav className='text-[13px] flex whitespace-nowrap  items-center py-1.5 justify-between '>
          <p className='pr-8'>Chặn người dùng</p>
          <div className='bg-[rgba(0,0,0,0.2)] relative rounded-full px-[15px] py-2'>
            <p className='w-1/2 h-full  rounded-full absolute top-0 left-[2px] bg-white'></p>
          </div>
        </nav>
        <nav className='text-[13px] flex whitespace-nowrap  items-center py-1.5 justify-between '>
          <p className=''>Tố cáo người dùng</p>
          <p className='text-lg'>{ArrowRight}</p>
        </nav>
      </div>
      <p className=' flex text-[13px]  whitespace-nowrap items-center justify-between py-1.5'>
        thông tin cá nhân
        <p className='text-lg'>{ArrowRight}</p>
      </p>
    </div>
  )
}

export default GetCustomizeMess
