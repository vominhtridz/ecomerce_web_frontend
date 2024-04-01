import { LoginIcon } from "../../../../images/centerIcons"
import ItemsOfAccount from "./ItemsOfAccount"

export const AccountOfMine = () => {
  const handleShow = () => {}
  return (
    <div className='py-2'>
      <button className='flex items-center' onClick={handleShow}>
        <p className='text-2xl mr-1.5 text-blue-500 rounded-full'>{LoginIcon}</p>
        <p className='text-[14px] whitespace-nowrap text-black block hover:text-green-600 leading-4'>
          Tài khoản của tôi
        </p>
      </button>
      <ItemsOfAccount />
    </div>
  )
}
export default AccountOfMine
