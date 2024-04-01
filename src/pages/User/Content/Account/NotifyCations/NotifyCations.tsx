import { useMyContext } from "../../../../../context/context"
import ItemsNotifyCations from "./ItemsNotifyCations"

export const PageUserNotifyCations = () => {
  const { langCode } = useMyContext()
  return (
    <section className='text-[17px] font-sans bg-white w-full p-4'>
      <div className='flex justify-between px-2 text-[18px] text-black  border-b py-4 border-slate-300'>
        Cài Đặt thông báo
      </div>
      <nav className='px-2 p-4'>
        <h2 className=' font-sans text-black'>Thông báo Email</h2>
        <ItemsNotifyCations />
      </nav>
    </section>
  )
}
export default PageUserNotifyCations
