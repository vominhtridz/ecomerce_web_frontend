import { FC } from "react"
import PriceAndDiscount from "./PriceAndDiscount"
import ImageAndItems from "./ImageAndItems"

const OrderShopping: FC = () => {
  return (
    <div className='flex py-6'>
      <ImageAndItems />
      <PriceAndDiscount />
    </div>
  )
}
export default OrderShopping
