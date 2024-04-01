import { DownIcon } from "../../images/centerIcons"

const AddBtn = () => {
  const handleCheckout = () => {}
  return (
    <button onClick={handleCheckout} className='w-full text-sm flex items-center px-4 my-1 text-black'>
      Thêm <p className='px-1 text-[12px] mt-[3px]'>{DownIcon}</p>
    </button>
  )
}
export default AddBtn
