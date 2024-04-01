import { useMyContext } from "../../../../../context/context"
import AddCreditCard from "./button/AddCreditCard"

import ShowBank from "./ShowBank/ShowBank"
import AddNewCart from "./button/AddNewCard"

export const PageBank = () => {
  const { langCode } = useMyContext()
  return (
    <section className=' bg-white w-full p-4'>
      <nav className='flex justify-between px-2  border-b py-4 border-slate-400'>
        <h2 className=' text-black text-lg'>Thẻ Tín Dụng/Ghi Nợ</h2>
        <AddCreditCard />
      </nav>
      <AddNewCart />
      <ShowBank />
    </section>
  )
}
export default PageBank
