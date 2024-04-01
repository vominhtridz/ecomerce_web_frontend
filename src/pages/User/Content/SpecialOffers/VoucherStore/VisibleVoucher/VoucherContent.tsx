import { ClockIcon } from "../../../../../../images/centerIcons"

const VoucherContent = () => {
  const handleCondition = () => {}
  return (
    <div className='text-[14.5px]'>
      <p className='leading-3'>Giảm tối đa ₫300k</p>
      <p className=''>Đơn Tối Thiểu ₫0</p>
      <p className='flex items-center italic text-[12px] my-2 text-slate-500'>
        <div className='px-1'>{ClockIcon}</div>
        Có hiệu lực sau: 1 ngày
        <button className='px-1 text-blue-600 text-[12.5px]' onClick={handleCondition}>
          Điều Kiện
        </button>
      </p>
    </div>
  )
}
export default VoucherContent
