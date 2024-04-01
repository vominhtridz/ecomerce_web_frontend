import { ChatBotInputTypes } from "../../../typescript/ChatBotType"

const ChatBoxInput = ({ ChatInput, handleFocus, handleBlur, handleChange }: ChatBotInputTypes) => {
  return (
    <input
      type='text'
      placeholder='Tìm kiếm'
      value={ChatInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      name='ChatInput'
      onChange={handleChange}
      className='border border-slate-300 rounded-sm pl-6 pr-4 w-full outline-none  py-1 text-[13px]'
    />
  )
}

export default ChatBoxInput
