import { Link, useLocation } from "react-router-dom"
import { useMyContext } from "../../../../../../context/context"
import VoucherLabel from "./VoucherLabel"
import VoucherContent from "./VoucherContent"
import VoucherUseLateBtn from "../button/VoucherUseLateBtn"

const VisibleVoucher = () => {
  const { langCode } = useMyContext()
  const path = useLocation().pathname

  return (
    <div className='flex items-center flex-wrap w-full'>
      <nav className='w-1/2    '>
        <div className='mx-4 my-2 flex items-center justify-around border shadow-md rounded-sm border-slate-200'>
          <VoucherLabel />
          <VoucherContent />
          <VoucherUseLateBtn />
        </div>
      </nav>
      <nav className='w-1/2    '>
        <div className='mx-4 my-2 flex items-center justify-around border shadow-md rounded-sm border-slate-200'>
          <VoucherLabel />
          <VoucherContent />
          <VoucherUseLateBtn />
        </div>
      </nav>
      <nav className='w-1/2    '>
        <div className='mx-4 my-2 flex items-center justify-around border shadow-md rounded-sm border-slate-200'>
          <VoucherLabel />
          <VoucherContent />
          <VoucherUseLateBtn />
        </div>
      </nav>
      <nav className='w-1/2    '>
        <div className='mx-4 my-2 flex items-center justify-around border shadow-md rounded-sm border-slate-200'>
          <VoucherLabel />
          <VoucherContent />
          <VoucherUseLateBtn />
        </div>
      </nav>
      <nav className='w-1/2    '>
        <div className='mx-4 my-2 flex items-center justify-around border shadow-md rounded-sm border-slate-200'>
          <VoucherLabel />
          <VoucherContent />
          <VoucherUseLateBtn />
        </div>
      </nav>
      <nav className='w-1/2    '>
        <div className='mx-4 my-2 flex items-center justify-around border shadow-md rounded-sm border-slate-200'>
          <VoucherLabel />
          <VoucherContent />
          <VoucherUseLateBtn />
        </div>
      </nav>
      <nav className='w-1/2    '>
        <div className='mx-4 my-2 flex items-center justify-around border shadow-md rounded-sm border-slate-200'>
          <VoucherLabel />
          <VoucherContent />
          <VoucherUseLateBtn />
        </div>
      </nav>
    </div>
  )
}
export default VisibleVoucher
