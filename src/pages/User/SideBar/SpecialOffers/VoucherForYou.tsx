import { Link, useLocation } from "react-router-dom"
import { useMyContext } from "../../../../context/context"

const getVoucherForYou = [
  {
    route: "/voucher-wallet",
    title: "Kho voucher Của Bạn",
  },
  {
    route: "/freeShip",
    title: "FreeShip 0Đ",
  },
  {
    route: "/supercheap",
    title: "LiveGood siêu rẻ",
  },
  {
    route: "/discount-code",
    title: "Mã giảm giá",
  },
]
const VoucherForYou = () => {
  const { langCode } = useMyContext()
  const path = useLocation().pathname
  const getVoucher = () =>
    getVoucherForYou.map(voucher => {
      const CheckPath = `/${langCode}/user/account${voucher.route}`
      return (
        <Link
          to={`/${langCode}/user${voucher.route}`}
          className={`py-1 hover:text-green-500 ${CheckPath === path ? "text-red-500" : ""}`}
          key={voucher.route}
        >
          {voucher?.title}
        </Link>
      )
    })
  return <nav className='flex flex-col text-sm  text-slate-700 ml-8 py-1'>{getVoucher()}</nav>
}
export default VoucherForYou
