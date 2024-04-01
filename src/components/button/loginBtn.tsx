import { Link } from "react-router-dom"

import { FC, FormEvent } from "react"
import { useMyContext } from "../../context/context"
interface ButtonRegisterTypes {
  handleLogin: (e: FormEvent) => void
}
const ButtonLogin: FC<ButtonRegisterTypes> = ({ handleLogin }) => {
  const { langCode } = useMyContext()

  return (
    <nav className='flex justify-between pt-4 items-center'>
      <button
        type='submit'
        className=' px-8 py-4 border-slate-500 border-2'
        onClick={handleLogin}
      >
        Login
      </button>
      <Link to={`/${langCode}/register`} className='text-green-600 text-lg  pr-4'>
        Register
      </Link>
    </nav>
  )
}
export default ButtonLogin
