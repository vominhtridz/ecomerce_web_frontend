import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMyContext } from "../../../context/context"
import EmailInput from "../../../components/Input/User/Email"
import PasswordInput from "../../../components/Input/User/Password"
import ButtonLogin from "../../../components/button/loginBtn"
import CheckFormInput from "./CheckConfirmLogin"
import { UserLoggedIn, getUser } from "../../../apis/apis"
import { usersTypes } from "../../../typescript/UserTypes"
import Cookies from "universal-cookie"
import { CheckUserAvailable } from "./index"

const LoginInput = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const { langCode, setDataUser } = useMyContext()
  const [email, setEmail] = useState<string>("")
  const [users, setusers] = useState<usersTypes[]>([])
  const [pwd, setpwd] = useState<string>("")
  const [emailError, setEmailError] = useState<boolean>(false)
  const [Incorect, setIncorect] = useState<boolean>(false)

  useEffect(() => {
    getUser().then(res => {
      setusers(res.data)
    })
  }, [])
  useEffect(() => {
    if (email && pwd) {
      UserLoggedIn({ email, pwd }).then(res => console.log(res))
    }
  }, [setDataUser])

  const handleLogin = (e: FormEvent) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    e.preventDefault()
    e.stopPropagation()
    if (!emailRegex.test(email)) {
      setEmailError(true)
      return false
    }
    const result = CheckUserAvailable(users, email, pwd)
    if (result) {
      handleLoggedIn()
    } else {
      setIncorect(true)
      alert("Tài khoản hay mật khẩu không đúng!")
    }
  }
  const handleLoggedIn = () => {
    cookies.set("loggedIn", "true", { path: "/", maxAge: 30 * 24 * 60 * 60 })
    UserLoggedIn({ email, pwd }).then(res => {
      const basicUsers = JSON.stringify({
        userName: res.data[0].userName,
        id: res.data[0].userID,
        LoggedIn: true,
      })
      setDataUser(res.data[0])
      localStorage.setItem("basicUsers", basicUsers)
    })
    alert("đăng nhập thành công!")
    navigate(`/${langCode}`)
  }
  const Changepwd = (e: ChangeEvent<HTMLInputElement>) => setpwd(e.target.value)
  const ChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

  return (
    <div className=''>
      <h1 className='flex justify-center items-center text-4xl text-black uppercase font-bold'>
        Login member
      </h1>
      <CheckFormInput emailError={emailError} Incorect={Incorect} />
      <form onSubmit={handleLogin} className='py-6 px-96'>
        <EmailInput email={email} ChangeEmail={ChangeEmail} />
        <PasswordInput pwd={pwd} Changepwd={Changepwd} />
        <ButtonLogin handleLogin={handleLogin} />
      </form>
    </div>
  )
}
export default LoginInput
