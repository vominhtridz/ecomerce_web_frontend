import { FollowType } from "../../typescript/ProductInforType"

const FollowBtn = ({ handleFollow }: FollowType) => {
  return (
    <button
      onClick={handleFollow}
      className='w-full text-sm h-[30px] flex items-center transition duration-400 justify-center rounded-sm border border-white text-white'
    >
      <p className='text-xl px-2 py-0'>+</p>
      Theo dõi
    </button>
  )
}
export default FollowBtn
