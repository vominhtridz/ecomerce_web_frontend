import ChatBotMessage from "../ChatBotMessage/ChatBotMessage"
import HistoryChat from "../HistoryChat/HistoryChat"
import EditSizeButton from "./EditSizeButton"

const ChatBot = () => {
  return (
    <section className='fixed max-w-[640px] w-[640px] h-[570px] max-h-[570px]  transition duration-900 right-4 bottom-0  rounded-lg shadow bg-white text-[13.5px] text-slate-600'>
      <div className='flex justify-between px-2 py-1.5 shadow border border-slate-100'>
        <h2 className='text-green-600 text-xl '>Chat</h2>
        <EditSizeButton />
      </div>
      <div className='flex h-full w-full '>
        <HistoryChat />
        <ChatBotMessage />
      </div>
    </section>
  )
}

export default ChatBot
