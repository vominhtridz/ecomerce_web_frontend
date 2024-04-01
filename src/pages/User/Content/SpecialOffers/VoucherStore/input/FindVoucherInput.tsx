import { ChangeEvent, FC } from "react"

interface FindVoucherInputTypes {
  voucherInput: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleKeyPress: () => void
}
const FindVoucherInput: FC<FindVoucherInputTypes> = ({ voucherInput, handleChange, handleKeyPress }) => {
  return (
    <input
      type='text'
      value={voucherInput}
      className='w-[28rem] px-3 outline-none text-[13px] py-2.5 text-black border border-slate-300'
      placeholder='Tìm Voucher..'
      onChange={handleChange}
      onKeyUp={handleKeyPress}
    />
  )
}
export default FindVoucherInput
