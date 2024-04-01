import { FC } from "react"
import TotalPrices from "./TotalPrices"
import PromosionalCode from "../input/PromosionalCode"
import CheckoutBtn from "../../../../components/button/Cart/CheckoutBtn"
import BuyWithGBay from "../../../../components/button/Cart/BuyWithGBay"

const OrderSummary: FC = () => {
  return (
    <section className='border border-slate-300 p-6 rounded-lg'>
      <TotalPrices />
      <PromosionalCode />
      <CheckoutBtn />
      <BuyWithGBay />
    </section>
  )
}
export default OrderSummary
