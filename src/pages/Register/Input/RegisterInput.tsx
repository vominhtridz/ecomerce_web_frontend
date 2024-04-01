import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import CheckFormInput from "./CheckFormInput"
import { useNavigate } from "react-router-dom"
import { useMyContext } from "../../../context/context"
import EmailInput from "../../../components/Input/User/Email"
import ConfirmPwd from "./Confirmpwd"
import ButtonRegister from "../../../components/button/RegisterBtn"
import { RegisterUser, getUser } from "../../../apis/apis"
import UserName from "../../../components/Input/User/UserName"
import { RegisterUserTypes } from "../../../typescript/UserTypes"
import PasswordInput from "../../../components/Input/User/Password"
import UserAdress from "../../../components/Input/User/UserAdress"
const RegisterInput = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<RegisterUserTypes[]>([])
  const { langCode } = useMyContext()
  const [adress, setadress] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  const [conFirmPwd, setConFirmPwd] = useState<string>("")
  const [pwd, setpwd] = useState<string>("")
  const [pwdError, setpwdError] = useState<boolean>(false)
  const [AccountAvailable, setAccountAvailable] = useState<boolean>(false)

  const [emailError, setEmailError] = useState<boolean>(false)
  const [conFirmPwdError, setconFirmPwdError] = useState<boolean>(false)
  useEffect(() => {
    getUser().then(res => {
      setUsers(res.data)
    })
  }, [])
  function handleRegister(e: FormEvent) {
    const pwdRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    e.preventDefault()
    setEmailError(false)
    setpwdError(false)
    setconFirmPwdError(false)

    if (!emailRegex.test(email)) {
      setEmailError(true)
      return
    }
    //Check pwd
    if (!pwdRegex.test(pwd)) {
      setpwdError(true)
      return
    }
    // check Confirm pwd
    if (pwd !== conFirmPwd) {
      setconFirmPwdError(true)
      return
    }
    const CheckAccountAvailable = users.find(user => {
      const Useremail = user.email.toLowerCase()
      return Useremail === email.toLowerCase()
    })
    if (!CheckAccountAvailable) {
      RegisterUser({ email, pwd, userName, adress })
      navigate(`/${langCode}/login`)
      alert("đăng kí thành công.")
    } else {
      setAccountAvailable(true)
      alert("Email Was Available.")
    }
    // Lưu trữ user bên phần backend
  }
  const Changepwd = (e: ChangeEvent<HTMLInputElement>) => setpwd(e.target.value)
  const ChangeConfirm = (e: ChangeEvent<HTMLInputElement>) =>
    setConFirmPwd(e.target.value)
  const ChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const ChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
  const ChangeAdress = (e: ChangeEvent<HTMLInputElement>) => setadress(e.target.value)

  return (
    <div className=''>
      <h1 className='flex justify-center items-center text-4xl text-black uppercase font-bold'>
        Register
      </h1>
      <CheckFormInput
        pwdError={pwdError}
        emailError={emailError}
        conFirmPwdError={conFirmPwdError}
        AccountAvailable={AccountAvailable}
      />
      <form className='py-6 px-96 ' onSubmit={handleRegister}>
        <UserName userName={userName} ChangeUserName={ChangeUserName} />
        <EmailInput email={email} ChangeEmail={ChangeEmail} />
        <PasswordInput pwd={pwd} Changepwd={Changepwd} />
        <ConfirmPwd conFirmPwd={conFirmPwd} ChangeConfirm={ChangeConfirm} />
        <UserAdress ChangeAdress={ChangeAdress} adress={adress} />
        <ButtonRegister handleRegister={handleRegister} />
      </form>
    </div>
  )
}
export default RegisterInput
