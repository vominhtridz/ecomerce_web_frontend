import { Link, useLocation } from "react-router-dom"
import { useMyContext } from "../../../../context/context"

const GetItemsOfNotifycations = [
  {
    route: "/order",
    title: "Cập nhật đơn hàng",
  },
  {
    route: "/promosion",
    title: "khuyến mãi",
  },
  {
    route: "/updateWallet",
    title: "Cập nhật ví",
  },
  {
    route: "/updatelivegood",
    title: "Cập nhật Livegood",
  },
]

const ItemsOfNotifycations = () => {
  const { langCode } = useMyContext()
  const path = useLocation().pathname

  const getLinkNotifyCation = () =>
    GetItemsOfNotifycations.map(Notifycations => {
      const CheckPath = `/${langCode}/user/notifycations${Notifycations.route}`

      return (
        <Link
          to={`/${langCode}/user/notifications${Notifycations.route}`}
          className={`py-1 whitespace-nowrap hover:text-green-500 ${CheckPath === path ? "text-red-500" : ""}`}
          key={Notifycations.route}
        >
          {Notifycations?.title}
        </Link>
      )
    })
  return <nav className='flex flex-col text-sm my-1 text-slate-700 ml-8 py-1'>{getLinkNotifyCation()}</nav>
}
export default ItemsOfNotifycations
