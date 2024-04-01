import { ChangeEvent, useState } from "react"

import IncrementBtn from "../../../../../components/button/IncrementBtn"
import DecrementBtn from "../../../../../components/button/DecrementBtn"
import NumberInput from "../../../../../components/Input/NumberInput"
const Quality = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [number, setNumber] = useState<number>(1)
  const ChangeNumber = (e: ChangeEvent<HTMLInputElement>) => setNumber(parseInt(e.target.value))
  const handleDecement = () => setNumber(prev => prev - 1)
  const handleIncrement = () => setNumber(prev => prev + 1)

  return (
    <div className='flex items-center my-2 text-[14px] leading-5'>
      <p className='pr-2'>Số lượng</p>
      <nav className='flex items-center pl-9'>
        <DecrementBtn handleDecement={handleDecement} />
        <NumberInput number={number} ChangeNumber={ChangeNumber} />
        <IncrementBtn handleIncrement={handleIncrement} />
      </nav>
      <p className='text-black px-6'>33191 sản phẩm có sẵn</p>
    </div>
  )
}
export default Quality
