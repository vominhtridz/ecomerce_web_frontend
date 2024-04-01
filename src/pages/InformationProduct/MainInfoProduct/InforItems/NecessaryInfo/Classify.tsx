import { useState } from "react"
import moc from "..//..//..//..//..//images/InforProduct/moc_do.jfif"
const Classify = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className='flex items-center  text-[13.5px] my-4  leading-5'>
      <p className='pr-2'>Phân loại</p>
      <nav className='pl-8 flex items-center'>
        <button className='flex border px-2 py-1.5 border-green-400 rounded-sm mx-1'>
          <img src={moc} alt='' className='w-6 h-6' />
          <p className='text-green-700 px-1'>Set 9 Chiếc</p>
        </button>
        <button className='flex border px-2 py-1.5 border-slate-500 rounded-sm mx-1'>
          <img src={moc} alt='' className='w-6 h-6' />
          <p className='text-slate-700 px-1'>Set 45 Chiếc</p>
        </button>
      </nav>
    </div>
  )
}
export default Classify
