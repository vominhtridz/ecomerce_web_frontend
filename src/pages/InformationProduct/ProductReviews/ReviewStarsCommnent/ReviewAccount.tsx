import { getFiveStar } from "../../../Search/SideBar/Categories"

const ReviewAccount = () => {
  return (
    <nav className='text-[13px] text-black '>
      <span className=''>Nguyễn thị kiều châu</span>
      <p className='flex items-center py-1 text-red-500'>{getFiveStar}</p>
      <p className='text-[12.5px] text-slate-500'>2021-06-17 11:11</p>
    </nav>
  )
}

export default ReviewAccount
