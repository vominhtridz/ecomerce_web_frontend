import { FC } from "react"
import { NoSlashLeft } from "../../../images/centerIcons"
interface LeftBtnTypes {
  HandleMoveLeft: () => void
}
const LeftBtn: FC<LeftBtnTypes> = ({ HandleMoveLeft }) => {
  return (
    <button
      onClick={HandleMoveLeft}
      className='shadow-lg p-2 transition duration-600 hover:text-xl hover:p-4 hover:left-[-2%] 
      hover:shadow-xl text-sm absolute left-[-1%] top-[47%] bg-white  rounded-full '
    >
      {NoSlashLeft}
    </button>
  )
}
export default LeftBtn
