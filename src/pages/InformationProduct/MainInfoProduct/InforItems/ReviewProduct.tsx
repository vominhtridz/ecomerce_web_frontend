import { getFiveStar } from "../../../Search/SideBar/Categories"

const ReviewProduct = () => {
  const handleDenounce = () => {}
  return (
    <nav className='flex w-full items-center text-slate-700 my-2 text-[15px]'>
      <p className='text-red-500 px-2 flex items-center'>
        <span className='block text-[17.5px] underline'>4.5</span>
        <span className=' px-1 text-[17.5px] flex '>{getFiveStar} </span>
      </p>
      <p className='py-2 border-r mx-4 border-slate-400'></p>
      <p className='text-red-500 px-2 flex items-center'>
        <span className='block text-[17px] text-black'>8.6</span>
        <label className='text-slate-500  pt-1 px-1'>Đánh giá</label>
      </p>
      <p className='py-2 border-r mx-4 border-slate-400'></p>
      <p className='text-red-500 px-2 flex items-center'>
        <span className='block text-[17px] text-black'>36.6k</span>
        <label className='text-slate-500 pt-1 px-1'>Đã bán</label>
      </p>
      <button className='ml-auto text-slate-500' onClick={handleDenounce}>
        tố cáo
      </button>
    </nav>
  )
}
export default ReviewProduct
