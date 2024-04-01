import { ChangeEvent, FormEvent } from "react"

export interface ChatBotInputTypes {
  ChatInput: string
  handleFocus: () => void
  handleBlur: () => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export interface SearchHistoryTypes {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleFocus: () => void
  handleBlur: () => void
  ChatInput: string
  ListHistory: boolean
  handleShowAll: () => void
}
export interface FormMessageChatTypes {
  handleSubmitMess: (e: FormEvent) => void
  changeChatInput: (e: ChangeEvent<HTMLInputElement>) => void
  ChatBotInput: string
}
