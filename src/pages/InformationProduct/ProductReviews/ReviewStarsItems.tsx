import { getFiveStar } from "../../Search/SideBar/Categories"

const ReviewStarsItems = () => {
  return (
    <div className='flex bg-red-50 px-8 py-2 items-center'>
      <nav className='pr-10'>
        <h2 className=' text-red-700 pb-1 text-base flex items-center'>
          <p className='text-3xl pr-1'>4.7</p> <p className='pt-2.5'>trên 5</p>
        </h2>
        <span className='flex items-center text-2xl text-red-500'>{getFiveStar}</span>
      </nav>
      <nav className='flex items-center flex-wrap'>
        <label
          htmlFor=''
          className='flex items-center justify-center px-6 py-1 rounded-sm mx-1 my-1 bg-white   border-red-500 border text-red-500'
        >
          Tất Cả
        </label>
        <label
          htmlFor=''
          className='flex items-center justify-center px-8 bg-white text-slate-700 py-1 rounded-sm mx-1 my-1 border border-slate-200 '
        >
          5 Sao
        </label>
        <label
          htmlFor=''
          className='flex items-center justify-center px-8 bg-white text-slate-700 py-1 rounded-sm mx-1 my-1 border border-slate-200 '
        >
          4 Sao
        </label>
        <label
          htmlFor=''
          className='flex items-center justify-center px-8 bg-white text-slate-700 py-1 rounded-sm mx-1 my-1 border border-slate-200 '
        >
          3 Sao
        </label>

        <label
          htmlFor=''
          className='flex items-center justify-center px-8 bg-white text-slate-700 py-1 rounded-sm mx-1 my-1 border border-slate-200 '
        >
          2 Sao
        </label>
        <label
          htmlFor=''
          className='flex items-center justify-center px-8 bg-white text-slate-700 py-1 rounded-sm mx-1 my-1 border border-slate-200 '
        >
          1 Sao
        </label>
        <label
          htmlFor=''
          className='flex items-center justify-center px-8 bg-white text-slate-700 py-1 rounded-sm mx-1 my-1 border border-slate-200 '
        >
          Có bình luận
        </label>
        <label
          htmlFor=''
          className='flex items-center justify-center px-8 bg-white text-slate-700 py-1 rounded-sm mx-1 my-1 border border-slate-200 '
        >
          Có hình ảnh / Video
        </label>
      </nav>
    </div>
  )
}

export default ReviewStarsItems
