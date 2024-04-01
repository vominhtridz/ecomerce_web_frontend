import { useMyContext } from "../../../../../../context/context"

const ManagerAddress = () => {
  const { langCode } = useMyContext()
  const handleUpdate = () => {}
  const handleRemove = () => {}
  return (
    <div className=' '>
      <nav className='flex items-center ml-6'>
        <button className='text-[13px] text-blue-500 px-2 py-1' onClick={handleUpdate}>
          Cập nhật
        </button>
        <button className='text-[13px] text-blue-500 px-2 py-1' onClick={handleRemove}>
          Xoá
        </button>
      </nav>
      <button className='px-2 my-2 py-1 text-[13px] text-slate-500 rounded-sm border border-slate-200'>
        Thiết lập mặc định
      </button>
    </div>
  )
}
export default ManagerAddress
