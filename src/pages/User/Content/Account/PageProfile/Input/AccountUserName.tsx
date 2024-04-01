import { ChangeEvent, FC, useEffect, useState } from "react"
import Cookies from "universal-cookie"
import { BasicUsers } from "../../../../../../typescript/UserTypes"

interface AccountUserNameTypes {
  accountUserName: string
  ChangeAccountUserName: (e: ChangeEvent<HTMLInputElement>) => void
}
const AccountUserName: FC<AccountUserNameTypes> = ({ accountUserName, ChangeAccountUserName }) => {
  const cookies = new Cookies()
  const [basicUser, setBasicUser] = useState<BasicUsers>()
  useEffect(() => {
    const LoggedInCookies = cookies.get("loggedIn")
    if (LoggedInCookies) {
      const localStorageUserName = localStorage.getItem("basicUsers")
      if (localStorageUserName) {
        try {
          const parsedUserName = JSON.parse(localStorageUserName)

          setBasicUser(parsedUserName)
        } catch (error) {
          console.error("Error parsing JSON:", error)
        }
      }
    }
  }, [])

  return (
    <nav className='flex items-center'>
      <p className='whitespace-nowrap'>Tên Đăng Nhập </p>
      <div className='pl-2 w-full'>
        <input
          autoComplete='new-password'
          type='text'
          className='outline-none w-full px-2 py-2 text-sm transition duration-500   border my-2  text-black border-slate-400 rounded-sm '
          placeholder='Enter Your name...'
          onChange={ChangeAccountUserName}
          value={basicUser?.userName || accountUserName}
          required
        />
      </div>
    </nav>
  )
}
export default AccountUserName
