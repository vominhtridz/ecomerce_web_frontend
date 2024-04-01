import { Link, useLocation } from "react-router-dom"
import { useMyContext } from "../../../../../context/context"

const manageVoucherNavLink = [
  {
    title: "Tất cả ",
  },
  {
    title: "Livegood",
  },
  {
    title: "Shop ",
  },
  {
    title: "Nạp thẻ & Dịch vụ (0)",
  },
  {
    title: "Scan & Pay (0)",
  },
  {
    title: "Từ đối tác (0)",
  },
]
const VoucherNavLink = () => {
  const { langCode } = useMyContext()
  const path = useLocation().pathname
  const getVoucherNavLink = () => {
    return manageVoucherNavLink.map((voucher, index) => {
      const CheckPath = `/${langCode}/user`
      return (
        <Link
          to={`/${langCode}/user/voucher-wallet`}
          key={index}
          className={` whitespace-nowrap inline-flex text-[15px]   items-center ${CheckPath === path ? "border-b text-green-600" : ""}   py-3  border-green-500`}
        >
          <p className='px-11'>{voucher.title}</p>
          <p className={`${voucher.title === "Từ đối tác (0)" ? "hidden" : ""} text-sm  text-slate-400  `}>|</p>
        </Link>
      )
    })
  }
  return <nav className='w-full flex items-center my-6  border-b border-slate-200'>{getVoucherNavLink()}</nav>
}
export default VoucherNavLink
