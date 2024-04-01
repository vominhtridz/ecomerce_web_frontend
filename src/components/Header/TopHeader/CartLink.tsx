import { Link } from "react-router-dom"
import { CartImg } from "../../../images/centerIcons"
import { useMyContext } from "../../../context/context"

const CartLinkOptions = [
  {
    img: CartImg,
    title: "My Cart",
    route: "/cart",
  },
]
const CartLink = () => {
  const { langCode } = useMyContext()
  const getCartLink = () => {
    return CartLinkOptions.map((item, index) => {
      return (
        <Link
          to={`/${langCode}${item.route} `}
          key={index}
          className='cursor-pointer px-2 flex items-center text-slate-500 hover:text-green-600'
        >
          <div key={index} className='text-xl font-semibold pr-2'>
            {item.img}
          </div>
          <p className='pr-2 text-sm font-semibold  '>{item.title}</p>
        </Link>
      )
    })
  }
  return <nav className='flex items-center    whitespace-nowrap'>{getCartLink()}</nav>
}
export default CartLink
