import { ChangeEvent, useState } from "react"
import HistoryBox from "./HistoryBox"

import SearchHistoryChat from "./SearchHistoryChat"

const HistoryChat = () => {
  const [ChatInput, setChatInput] = useState<string>("")
  const [ListHistory, setListHistory] = useState<boolean>(false)
  function handleShowAll() {}
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setChatInput(e.target.value)
  const handleFocus = () => setListHistory(true)
  const handleBlur = () => setListHistory(false)
  return (
    <div className='text-[13px] h-full w-[220px]   '>
      <SearchHistoryChat
        ListHistory={ListHistory}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        ChatInput={ChatInput}
        handleChange={handleChange}
        handleShowAll={handleShowAll}
      />
      <HistoryBox />
    </div>
  )
}

export default HistoryChat
