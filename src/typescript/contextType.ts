import { ReactElement } from "react"
import { languageType } from "./languageType"
import { usersTypes } from "./UserTypes"

export interface myproviderType {
  children: ReactElement
}
export interface CreateContextTypes {
  dataUser?: usersTypes | null
  visibleMess?: boolean | null
  setVisibleMess: (e: boolean) => void
  setDataUser: (dataUser: usersTypes) => void
  language?: languageType | null
  setLanguage: (lang: languageType) => void
  langCode?: string
  setLangCode: (lang: string) => void
}