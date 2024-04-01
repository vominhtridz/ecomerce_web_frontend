import { ChatColorIcon } from "../../../images/centerIcons"
import CustomizeMessShop from "./CustomizeMessShop"
const ChatBotMessage = () => {
  return (
    <div className='w-full h-full border-l border-slate-300'>
      {/* <div className='text-8xl h-full bg-slate-50 flex items-center justify-center flex-col'>
        {ChatColorIcon}
        <p className='text-lg italic'>Bắt đầu nhắn tin nào</p>
      </div> */}

      <CustomizeMessShop />
    </div>
  )
}

export default ChatBotMessage
