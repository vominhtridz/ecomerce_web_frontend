import { ChangeEvent, FC, MouseEvent, useState } from "react"
import { Eyeicon, noEyeicon } from "../../../images/centerIcons"
interface RegisterTypes {
  pwd: string
  Changepwd: (e: ChangeEvent<HTMLInputElement>) => void
}
const PasswordInput: FC<RegisterTypes> = ({ pwd, Changepwd }) => {
  const [visibleEye, setVisibleEye] = useState<boolean>(false)

  const handleSeePsd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setVisibleEye(!visibleEye)
  }
  return (
    <nav className='relative'>
      <input
        autoComplete='new-password'
        type={`${visibleEye ? "text" : "password"}`}
        className='w-full p-4 transition duration-500   border my-2  text-black border-slate-400 rounded-md bg-[#e8f0fe]'
        placeholder='Enter Your Password'
        onChange={Changepwd}
        required
        value={pwd}
      />
      <button className='absolute top-7 right-4 text-2xl' onClick={handleSeePsd}>
        {!visibleEye && noEyeicon}
        {visibleEye && Eyeicon}
      </button>
    </nav>
  )
}
export default PasswordInput
