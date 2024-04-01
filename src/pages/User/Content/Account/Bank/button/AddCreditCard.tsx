import { useMyContext } from "../../../../../../context/context"

export const AddCreditCard = () => {
  const handleAddCreditCart = () => {}
  const { langCode } = useMyContext()
  return (
    <button
      className=' bg-red-500 text-white px-4 py-1 text-sm rounded-sm flex items-center '
      onClick={handleAddCreditCart}
    >
      <p className='text-2xl px-2 text-slate-50'>+</p> Thêm thẻ mới
    </button>
  )
}
export default AddCreditCard
