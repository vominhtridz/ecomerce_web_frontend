import { LoginIcon, NoStar, Star, StoreWhiteIcon } from "../../../images/centerIcons"

const InforItem = () => {
  return (
    <div className='flex px-6  text-[14px]'>
      <nav className=''>
        <div className='flex items-center text-slate-500 py-2.5 px-6  whitespace-nowrap'>
          <p className='text-lg text-black'>{StoreWhiteIcon}</p>
          <p className='px-2'>Sản phẩm:</p>
          <p className='text-green-400'>772</p>
        </div>
        <div className='flex items-center text-slate-500 py-2.5 px-6  whitespace-nowrap'>
          <p className='text-lg text-black'>{LoginIcon}</p>
          <p className='px-2'>Đang theo: </p>
          <p className='text-green-400'>0</p>
        </div>
        <div className='flex items-center text-slate-500 py-2.5 px-6  whitespace-nowrap'>
          <p className='text-lg text-black'>{StoreWhiteIcon}</p>
          <p className='px-2'>Tỷ lệ Phản hồi Chát:</p>
          <p className='text-green-400'>92% (Trong Vài Giờ)</p>
        </div>
      </nav>
      <nav className=''>
        <div className='flex items-center text-slate-500 py-2.5 px-6  whitespace-nowrap'>
          <p className='text-lg text-black'>{NoStar}</p>
          <p className='px-2'>Người theo dõi:</p>
          <p className='text-green-400'>42k</p>
        </div>
        <div className='flex items-center text-slate-500 py-2.5 px-6  whitespace-nowrap'>
          <p className='text-lg text-black'>{Star}</p>
          <p className='px-2'>Đánh giá:</p>
          <p className='text-green-400'>772</p>
        </div>
        <div className='flex items-center text-slate-500 py-2.5 px-6  whitespace-nowrap'>
          <p className='text-lg text-black'>{LoginIcon}</p>
          <p className='px-2'>Tham gia:</p>
          <p className='text-green-400'>4.6 (73k đánh giá)</p>
        </div>
      </nav>
    </div>
  )
}

export default InforItem
