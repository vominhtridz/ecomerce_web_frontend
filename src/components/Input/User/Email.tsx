import { ChangeEvent, FC } from "react"

interface EmailInputTypes {
  email: string
  ChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
}
const EmailInput: FC<EmailInputTypes> = ({ email, ChangeEmail }) => {
  return (
    <input
      autoComplete='new-password'
      type='email'
      className='w-full p-4 transition duration-500   border my-  text-black border-slate-400 rounded-md bg-[#e8f0fe]'
      placeholder='Enter Your Email...'
      onChange={ChangeEmail}
      value={email}
      required
    />
  )
}
export default EmailInput
