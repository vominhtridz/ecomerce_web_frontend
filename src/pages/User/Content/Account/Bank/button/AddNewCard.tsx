import { useMyContext } from "../../../../../../context/context"
import { AddBankCard } from "./AddBankCard"

export const AddNewCart = () => {
  const { langCode } = useMyContext()
  return (
    <div className=' border-b border-slate-400 py-6 '>
      <p className='py-16 flex items-center justify-center'>Bạn chưa liên kết thẻ.</p>
      <nav className='flex items-center justify-between px-4'>
        <p>Tài Khoản Ngân Hàng Của Tôi</p>
        <AddBankCard />
      </nav>
    </div>
  )
}
export default AddNewCart
