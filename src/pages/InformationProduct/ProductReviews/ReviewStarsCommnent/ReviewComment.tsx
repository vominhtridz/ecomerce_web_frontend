import img from "..//..//..//..//images/products/USEFP101_Present.jpg"

import LeftBtn from "../../../../components/button/Home/LeftBtn"
import RightBtn from "../../../../components/button/Home/RightBtn"
import { Likeicon } from "../../../../images/centerIcons"
import { ReviewCommentTypes } from "../../../../typescript/ProductInforType"

const ReviewComment = ({ handleLike, color }: ReviewCommentTypes) => {
  return (
    <nav className='text-sm'>
      <h6 className='py-2 '>
        Shop nhiệt tình tư vấn.Sản phẩm giao hỏa tốc siêu nhanh.Móc ko dày nhưng giá đó quá rẻ rồi.Phơi đồ là ok ko cần
        quá dày mà đắc đỏ
      </h6>
      <div className='flex items-center'>
        <img src={img} alt='' className='w-16 h-16 hover:cursor-zoom-in p-1   rounded-sm mr-2' />
        <img src={img} alt='' className='w-16 h-16 hover:cursor-zoom-in p-1  rounded-sm mr-2' />
        <img src={img} alt='' className='w-16 h-16 hover:cursor-zoom-in p-1 border border-green-600  rounded-sm mr-2' />
      </div>
      {/* Hình ảnh zoom */}
      <div className='my-2 '>
        <div className='w-[20rem] px-3 relative  rounded-md h-[25rem]'>
          <LeftBtn />
          <img src={img} className='w-full h-full ' alt='' />
          <RightBtn />
        </div>
        <button className='flex items-center my-3' onClick={handleLike}>
          <span
            className={`${color ? "text-red-500" : "text-slate-500 "}  transition duration-100 text-base block pr-2`}
          >
            {Likeicon}
          </span>
          <p className='text-slate-500'>12</p>
        </button>
      </div>
    </nav>
  )
}

export default ReviewComment
