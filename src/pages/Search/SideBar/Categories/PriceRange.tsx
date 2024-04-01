import { ChangeEvent, useState } from "react"
import ApplyBtn from "../button/ApplyBtn"

const PriceRange = () => {
  const [valueFrom, setValueFrom] = useState<number>(0)
  const [valueTo, setValueTo] = useState<number>(0)
  const handleChangeFrom = (e: ChangeEvent<HTMLInputElement>) => setValueFrom(parseInt(e.target.value))

  const handleChangeTo = (e: ChangeEvent<HTMLInputElement>) => setValueTo(parseInt(e.target.value))

  return (
    <div className=''>
      <h2 className='text-base pb-4 '>Khoảng giá</h2>
      <nav className='flex items-center'>
        <input
          onChange={handleChangeFrom}
          value={valueFrom}
          type='number'
          placeholder='Từ'
          className='text-sm outline-none px-2 py-1 w-1/2'
        />
        <p className='text-lg px-2'>-</p>
        <input
          value={valueTo}
          onChange={handleChangeTo}
          type='number'
          placeholder='Đến'
          className='text-sm outline-none px-2 py-1 w-1/2'
        />
      </nav>
      <ApplyBtn />
    </div>
  )
}
export default PriceRange
