import { Link } from "react-router-dom"

import { FC, FormEvent } from "react"
import { useMyContext } from "../../context/context"
interface ButtonRegisterTypes {
  handleRegister: (e: FormEvent) => void
}
const ButtonRegister: FC<ButtonRegisterTypes> = ({ handleRegister }) => {
  const { langCode } = useMyContext()

  return (
    <nav className='flex justify-between pt-4 items-center'>
      <button
        type='submit'
        className=' px-8 py-4 border-slate-500 border-2'
        onClick={handleRegister}
      >
        Register
      </button>
      <Link to={`/${langCode}/login`} className='text-green-600 text-lg  pr-4'>
        Login
      </Link>
    </nav>
  )
}
export default ButtonRegister
