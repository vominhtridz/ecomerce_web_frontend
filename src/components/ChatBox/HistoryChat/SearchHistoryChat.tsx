import { DownIcon, SearchIcon } from "../../../images/centerIcons"
import { SearchHistoryTypes } from "../../../typescript/ChatBotType"
import ChatBoxInput from "../../Input/Chatbox/ChatBoxInput"

const SearchHistoryChat = ({
  handleChange,
  handleFocus,
  handleBlur,
  ChatInput,
  ListHistory,
  handleShowAll,
}: SearchHistoryTypes) => {
  return (
    <nav className='flex items-center   w-full px-4 py-2.5'>
      <div className='relative  '>
        <ChatBoxInput
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          ChatInput={ChatInput}
        />
        <label htmlFor='ChatInput' className='absolute left-2 top-2   text-slate-500 text-sm'>
          {SearchIcon}
        </label>
      </div>
      {!ListHistory && (
        <select
          onChange={handleShowAll}
          className=' cursor-pointer pl-1 outline-none flex relative  whitespace-nowrap    text-black'
        >
          <option className='px-4 py-1 block' value='all'>
            Tất cả
          </option>
          <option className='px-4 py-1 block' value='unread'>
            Chưa đọc
          </option>
          <option className='px-4 py-1 block' value='pinned'>
            Đã Ghim
          </option>
        </select>
      )}
    </nav>
  )
}

export default SearchHistoryChat
