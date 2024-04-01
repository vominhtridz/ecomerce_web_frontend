import { useMyContext } from "../../../../../context/context"
import SetUpUserImage from "./Image/SetUpUserImage"
import ItemsOfProfile from "./ItemsOfProfile"

export const PageProfile = () => {
  const { langCode } = useMyContext()
  return (
    <section className=' bg-white '>
      <nav className='px-6 py-4 border-b  vorder-slate-400'>
        <h2 className='text-[19px]   font-semibold'>Hồ sơ của tôi</h2>
        <p className='text-sm '>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </nav>
      <div className='rounded-sm flex  text-slate-700 px-6 py-4 w-full'>
        <ItemsOfProfile />
        <SetUpUserImage />
      </div>
    </section>
  )
}
export default PageProfile
