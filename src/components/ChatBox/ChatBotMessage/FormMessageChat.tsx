import React from "react"
import {
  ImageIcon,
  OrderIcon,
  ProductIcon,
  ServiceIcon,
  SmileIcon,
  SubmitIcon,
  VideoIcon,
} from "../../../images/centerIcons"
import { FormMessageChatTypes } from "../../../typescript/ChatBotType"

const manageOptionsIconChat = [
  {
    icon: SmileIcon,
    FunctionHandle: handleInserticon,
  },
  {
    icon: ImageIcon,
    FunctionHandle: handleInsertImage,
  },
  {
    icon: VideoIcon,
    FunctionHandle: handleInsertVideo,
  },
  {
    icon: ServiceIcon,
    FunctionHandle: handleService,
  },
  {
    icon: ProductIcon,
    FunctionHandle: handleShowProduct,
  },
  {
    icon: OrderIcon,
    FunctionHandle: handleOrder,
  },
]
function handleInserticon() {}
function handleInsertImage() {}
function handleInsertVideo() {}
function handleService() {}
function handleShowProduct() {}
function handleOrder() {}

const FormMessageChat = ({ handleSubmitMess, changeChatInput, ChatBotInput }: FormMessageChatTypes) => {
  function getOptionsIconChat() {
    return manageOptionsIconChat.map((OptionsIcon, index) => {
      return (
        <button onClick={OptionsIcon.FunctionHandle} className='text-lg px-1 text-slate-400' key={index}>
          {OptionsIcon.icon}
        </button>
      )
    })
  }
  function handleScroll() {
    console.log("hellloo")
  }
  return (
    <form onSubmit={handleSubmitMess} className='   w-full pb-3  bg-white  rounded-sm shadow'>
      <div className='' onScroll={handleScroll}>
        <p className='w-full border-t border-slate-300 hover:cursor-row-resize pt-1.5'></p>
        <input
          value={ChatBotInput}
          onChange={changeChatInput}
          type='text'
          placeholder='Nhập nội dung tin nhắn'
          className='w-full outline-none py-3 px-2   text-[13px]'
        />
      </div>
      <div className='flex items-center justify-between w-full pt-2'>
        <div className='flex items-center'>{getOptionsIconChat()}</div>
        <button type='submit' className='text-lg px-1 text-slate-400'>
          {SubmitIcon}
        </button>
      </div>
    </form>
  )
}

export default FormMessageChat
