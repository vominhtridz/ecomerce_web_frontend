import { useState } from "react"
import FreeIcon from "..//..//..//..//..//images/icons/freeicon.png"
import { QuestionIcon } from "../../../../../images/centerIcons"
const ReturnPolicy = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className='flex items-center my-4 text-[14px] leading-5'>
      <p className='pr-4'>
        Chính Sách Trả <br /> Hàng
      </p>
      <div className='flex items-center '>
        <img src={FreeIcon} alt='' className='w-4 h-4' /> <p className='px-2'>Trả hàng 15 ngày</p>
        <span className='flex text-slate-500 text-[13px] mt-1 px-2'>
          Đổi ý miễn phí <p className='mt-1 text-slate-500 w-2 h-2 px-2'>{QuestionIcon}</p>
        </span>
      </div>
    </div>
  )
}
export default ReturnPolicy
