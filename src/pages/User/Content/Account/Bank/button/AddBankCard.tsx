import { useMyContext } from "../../../../../../context/context"

export const AddBankCard = () => {
  const { langCode } = useMyContext()
  const handleAddBank = () => {}
  return (
    <button className=' bg-red-500 text-white px-4 py-1 text-sm rounded-sm flex items-center ' onClick={handleAddBank}>
      <p className='text-2xl px-2 text-slate-50'>+</p> Thêm tài khoản ngân hàng
    </button>
  )
}
export default AddBankCard
