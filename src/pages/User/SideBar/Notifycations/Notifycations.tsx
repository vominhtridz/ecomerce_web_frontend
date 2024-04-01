import { NotifycationsIcon } from "../../../../images/centerIcons"
import ItemsOfNotifycations from "./ItemsOfNotifycations"

export const Notifycations = () => {
  const handleShow = () => {}
  return (
    <div className=' py-2'>
      <button className='flex items-center' onClick={handleShow}>
        <p className='text-[17.5px] mr-3 text-red-500 rounded-full'>{NotifycationsIcon}</p>
        <p className='text-[14px] text-black block hover:text-green-600 leading-4'>Thông báo</p>
      </button>
      <ItemsOfNotifycations />
    </div>
  )
}
export default Notifycations
