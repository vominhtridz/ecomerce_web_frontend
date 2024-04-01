import { ChangeEvent, FormEvent, MouseEvent, useState } from "react"
import { DownIcon } from "../../../images/centerIcons"

import FormMessageChat from "./FormMessageChat"
import GetCustomizeMess from "./GetCustomizeMess"
import MessageShopChat from "./MessageChat"
import MessageCustomerChat from "./MessageCustomerChat"
const CustomizeMessShop = () => {
  const [visiblecusOptions, setVisiblecusOptions] = useState<boolean>(false)
  const [ChatBotInput, setChatBotInput] = useState<string>("")
  function handleShowCustomize(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    e.stopPropagation()
    setVisiblecusOptions(!visiblecusOptions)
  }
  // xử lý khi gửi tin nhắn
  function handleSubmitMess(e: FormEvent) {
    e.preventDefault()
    console.log()
  }

  const changeChatInput = (e: ChangeEvent<HTMLInputElement>) => setChatBotInput(e.target.value)
  return (
    <div className=' h-full w-full'>
      {/* options Shop */}
      <div className='bg-white z-10  rounded-sm shadow p-2.5  text-sm'>
        <button className='flex relative items-center text-sm' onClick={handleShowCustomize}>
          Shop Beauty
          <p className='px-1 pt-1'>{DownIcon}</p>
          {visiblecusOptions && <GetCustomizeMess />}
        </button>
      </div>
      {/* message */}
      <div
        className='w-full h-full
        flex flex-col  bg-slate-50 '
      >
        <div className='overflow-y-auto p-4 h-chatbotMess'>
          <MessageShopChat />
          <MessageCustomerChat ChatBotInput={ChatBotInput} />
        </div>
        {/* form message */}
        <FormMessageChat
          changeChatInput={changeChatInput}
          handleSubmitMess={handleSubmitMess}
          ChatBotInput={ChatBotInput}
        />
      </div>
    </div>
  )
}

export default CustomizeMessShop
