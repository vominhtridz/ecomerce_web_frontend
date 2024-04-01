import { useMyContext } from "../../../../../../context/context"

const AddressItems = () => {
  const { langCode } = useMyContext()
  return (
    <div className='text-slate-500'>
      <nav className='flex items-center text-sm my-1'>
        <p className=' py-1 pr-2 text-black'>nguyen huu tru</p>
        <span className='text-xl text-slate-400'>|</span>
        <p className=' py-1 pl-2'>(+84) 981737461</p>
      </nav>
      <nav className='my-2'>
        <p className='text-[12.5px] italic leading-4'>482/2/23/23, Hùng Vương</p>
        <address className='text-[12.5px] italic leading-4 my-1 '>
          Xã Bàu Chinh, Huyện Châu Đức, Bà Rịa - Vũng Tàu
        </address>
      </nav>
      <label className='text-[12.8px] my-2  font-sans p-1 border border-red-600 text-red-500'>Mặc định</label>
    </div>
  )
}
export default AddressItems
