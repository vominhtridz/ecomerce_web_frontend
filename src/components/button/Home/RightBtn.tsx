import { FC } from "react"
import { NoSlashRight } from "../../../images/centerIcons"
interface RightBtnTypes {
  HandleMoveRight: () => void
}
const RightBtn: FC<RightBtnTypes> = ({ HandleMoveRight }) => {
  return (
    <button
      onClick={HandleMoveRight}
      className='shadow-lg p-2 transition duration-600 hover:text-xl hover:p-4 hover:right-[-2%] 
      hover:shadow-xl text-sm absolute right-[-1%] top-[46%] bg-white  rounded-full  '
    >
      {NoSlashRight}
    </button>
  )
}
export default RightBtn
