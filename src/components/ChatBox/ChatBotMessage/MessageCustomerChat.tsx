import { WarningIcon } from "../../../images/centerIcons"

const MessageCustomerChat = ({ ChatBotInput }: { ChatBotInput: string }) => {
  function handleSendBack() {}
  return (
    <div className='w-full '>
      <div className='flex items-center justify-center text-[11.5px] py-1 my-2 '>
        <p className=' rounded-sm shadow   whitespace-nowrap    text-black'>Hôm nay</p>
      </div>
      <div className='flex flex-col w-full items-end '>
        <div className=' text-[13px] flex items-center  flex-end   mr-3'>
          <button onClick={handleSendBack} className='  cursor-pointer text-red-500 text-lg px-2'>
            {WarningIcon}
          </button>

          <pre
            style={{ overflowWrap: "break-word" }}
            className='bg-blue-50 overflow-wrap relative  max-w-[280px] p-3  leading-4 whitespace-pre-wrap px-2.5 text-slate-700 shadow rounded-sm '
          >
            {ChatBotInput}
            hello my friend
            <time className='  text-[11px] absolute bottom-[0] right-4'>13:01</time>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default MessageCustomerChat
