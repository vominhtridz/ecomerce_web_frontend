import { ChangeEvent, FC } from "react"

interface UserNameTypes {
  userName: string
  ChangeUserName: (e: ChangeEvent<HTMLInputElement>) => void
}
const UserName: FC<UserNameTypes> = ({ userName, ChangeUserName }) => {
  return (
    <input
      autoComplete='new-password'
      type='text'
      className='w-full p-4 transition duration-500   border my-2  text-black border-slate-400 rounded-md bg-[#e8f0fe]'
      placeholder='Enter Your UserName...'
      onChange={ChangeUserName}
      value={userName}
      required
    />
  )
}
export default UserName
