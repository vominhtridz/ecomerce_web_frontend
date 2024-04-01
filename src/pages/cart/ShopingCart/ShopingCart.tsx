import { FC } from "react"
import OrderShopping from "./OrderShopping/OrderShopping"

const ShopingCart: FC = () => {
  return (
    <div className=''>
      <h1 className='px-4 py-2 text-3xl font-bold uppercase border-b-2 border-slate-300'>
        Shopping Cart
      </h1>
      <OrderShopping />
    </div>
  )
}
export default ShopingCart
