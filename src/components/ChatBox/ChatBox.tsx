import { MessageIcon } from "../../images/centerIcons"
import ChatBot from "./ChatBot/ChatBot"
import { useMyContext } from "../../context/context"

const ChatBox = () => {
  const { visibleMess, setVisibleMess } = useMyContext()
  const handleShowMessage = () => {
    setVisibleMess(true)
  }
  return (
    <div className=''>
      {!visibleMess && (
        <button
          onClick={handleShowMessage}
          className='flex text-green-700 text-lg uppercase font-semibold bg-white shadow fixed bottom-0 right-6 items-center justify-center px-2 py-2 rounded-sm '
        >
          <p className='text-2xl px-3'>{MessageIcon}</p>
          Chat
        </button>
      )}
      {visibleMess && <ChatBot />}
    </div>
  )
}

export default ChatBox
