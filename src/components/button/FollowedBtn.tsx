import { FollowedType } from "../../typescript/ProductInforType"

const FollowedBtn = ({ handleFollowed }: FollowedType) => {
  return (
    <button
      onClick={handleFollowed}
      className='w-full text-sm flex items-center h-[30px] justify-center transition duration-400 rounded-sm border border-red-400 text-red-300'
    >
      Đang theo
    </button>
  )
}
export default FollowedBtn
