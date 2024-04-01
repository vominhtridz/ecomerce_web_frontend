import { FC } from "react"
import Price_Quality_total from "./Item/Price_Quality_total"
import DiscountBtn from "./button/DiscountBtn"
import OrderLink from "./Item/OrderLink"

const PriceAndDiscount: FC = () => {
  return (
    <div className='flex flex-col justify-between'>
      <Price_Quality_total />
      <DiscountBtn />
      <OrderLink />
    </div>
  )
}
export default PriceAndDiscount
