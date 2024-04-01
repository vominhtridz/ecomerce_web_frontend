import { useMyContext } from "../../../context/context"
import { messengerIcon } from "../../../images/centerIcons"

const ChatNowBtn = () => {
  const { setVisibleMess } = useMyContext()
  const handleChatNow = () => {
    setVisibleMess(true)
  }
  return (
    <button
      onClick={handleChatNow}
      className=' text-[13.5px] whitespace-nowrap  flex items-center mr-2 px-2 py-1 rounded-sm my-1 text-green-700 border border-green-500 bg-green-50'
    >
      <p className='text-lg pr-1'>{messengerIcon}</p>
      Chat ngay
    </button>
  )
}
export default ChatNowBtn
