import { Link, useLocation } from "react-router-dom"
import { useMyContext } from "../../../../context/context"

const getItemsOfAccount = [
  {
    route: "/profile",
    title: "Hồ sơ",
  },
  {
    route: "/bank",
    title: "Ngân Hàng",
  },
  {
    route: "/adress",
    title: "Địa chỉ",
  },
  {
    route: "/change-password",
    title: "Đổi mật khẩu",
  },
  {
    route: "/setting-Notifycations",
    title: "Cài đặt thông báo",
  },
]
const ItemsOfAccount = () => {
  const { langCode } = useMyContext()
  const path = useLocation().pathname
  const getItems = () =>
    getItemsOfAccount.map(voucher => {
      const CheckPath = `/${langCode}/user/account${voucher.route}`

      return (
        <Link
          to={`/${langCode}/user/account${voucher.route}`}
          key={voucher.title}
          className={`py-1 hover:text-green-500 ${CheckPath === path ? "text-red-500" : ""} `}
        >
          {voucher?.title}
        </Link>
      )
    })
  return <nav className='flex flex-col text-sm  text-slate-600 ml-8 py-1'>{getItems()}</nav>
}
export default ItemsOfAccount
