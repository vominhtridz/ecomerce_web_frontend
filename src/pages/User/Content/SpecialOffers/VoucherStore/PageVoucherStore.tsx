import { ChangeEvent, useState } from "react"
import { useMyContext } from "../../../../../context/context"
import { RemoveIcon } from "../../../../../images/centerIcons"
import FindMoreVoucherBtn from "./button/FindMoreVoucherBtn"
import HistoryVoucherBtn from "./button/HistoryVoucherBtn"
import LearnAboutBtn from "./button/LearnAboutBtn"
import FindVoucherBox from "./FindVoucherBox"
import VoucherNavLink from "./VoucherNavLink"
import VisibleVoucher from "./VisibleVoucher/VisibleVoucher"

export const PageVoucherStore = () => {
  return (
    <section className='bg-white w-full p-6'>
      <div className='flex items-center justify-between '>
        <h2 className='text-xl text-black'>Kho Voucher</h2>
        <nav className='flex items-center'>
          <FindMoreVoucherBtn />
          <p className='text-sm  px-2 text-salte-500'>|</p>
          <HistoryVoucherBtn />
          <p className='text-sm px-2  text-slate-500'>|</p>
          <LearnAboutBtn />
        </nav>
      </div>
      <FindVoucherBox />
      <VoucherNavLink />
      <VisibleVoucher />
    </section>
  )
}
export default PageVoucherStore
