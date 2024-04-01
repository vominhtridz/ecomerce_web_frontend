import { ChangeEvent, FC } from "react"

interface NumberTypes {
  number: number
  ChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void
}
const NumberInput: FC<NumberTypes> = ({ number, ChangeNumber }) => {
  return (
    <input
      autoComplete='new-password'
      type='number'
      className='text-[15px] border-l-0 border-r-0 w-10 pl-[15px]  justify-center  flex items-center py-1 border outline-none border-slate-300'
      placeholder='Enter Your Number...'
      onChange={ChangeNumber}
      value={number}
      inputMode='numeric'
      pattern='[0-9]*'
      required
    />
  )
}
export default NumberInput
