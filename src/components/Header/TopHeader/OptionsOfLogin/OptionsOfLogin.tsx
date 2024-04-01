import { useNavigate } from "react-router-dom"
import { LoginIcon } from "../../../../images/centerIcons"
import { useMyContext } from "../../../../context/context"
import { MouseEvent, useEffect, useState } from "react"
import Cookies from "universal-cookie"

import { GetOptionsOflogins } from "./GetOptionsOflogins"
import OptionLoggedIn from "./OptionsLoggedIn"
import { BasicUsers } from "../../../../typescript/UserTypes"

const OptionsOfLogin = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const { langCode, dataUser } = useMyContext()
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [basicUser, setBasicUser] = useState<BasicUsers>()
  const [visivle, setVisivle] = useState(false)
  useEffect(() => {
    const LoggedInCookies = cookies.get("loggedIn")
    if (LoggedInCookies) {
      const localStorageUserName = localStorage.getItem("basicUsers")
      if (localStorageUserName) {
        try {
          const parsedUserName = JSON.parse(localStorageUserName)
          setLoggedIn(true)
          setBasicUser(parsedUserName)
        } catch (error) {
          console.error("Error parsing JSON:", error)
        }
      }
    }
  }, [loggedIn, dataUser])

  const handleAccountLoggedIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`/${langCode}/user/voucher-wallet`)
  }
  const getAccountLoggedIn = () => {
    return (
      <button
        onMouseEnter={() => setVisivle(true)}
        onMouseLeave={() => setVisivle(false)}
        onClick={handleAccountLoggedIn}
        className=' px-2 relative  '
      >
        <div className='flex items-center whitespace-nowrap w-full '>
          <div className='text-xl mr-1.5 border border-slate-500 p-1 rounded-full bg-white text-slate-500'>
            {LoginIcon}
          </div>
          <p className='hover:text-green-600 font-normal text-sm'>
            {dataUser?.userName || basicUser?.userName}
          </p>
        </div>
        {visivle && <OptionLoggedIn setLoggedIn={setLoggedIn} />}
      </button>
    )
  }
  return (
    <section className='flex items-center max-md:text-[14px] text-slate-700 text-base font-semibold'>
      {loggedIn && getAccountLoggedIn()}
      {!loggedIn && <GetOptionsOflogins />}
    </section>
  )
}
export default OptionsOfLogin
