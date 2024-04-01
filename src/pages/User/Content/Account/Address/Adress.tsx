import { useMyContext } from "../../../../../context/context"
import ShowAdress from "./ShowAddress/ShowAddress"
import AddNewAddress from "./button/AddNewAddress"

export const PageAddress = () => {
  const { langCode } = useMyContext()
  return (
    <section className='bg-white w-full p-4'>
      <nav className='flex justify-between px-2  border-b py-4 border-slate-400'>
        <h2 className=' text-black text-lg'>Địa chỉ của tôi</h2>
        <AddNewAddress />
      </nav>
      <ShowAdress />
    </section>
  )
}
export default PageAddress
