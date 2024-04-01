import { FC } from "react"
import OrderSummary from "./OrderSumary/OrderSummary"

const SummaryProducts: FC = () => {
  return (
    <section className='shodow-lg ml-10 px-10 py-4 '>
      <h1 className='uppercase text-2xl text-black py-2 font-semibold'>
        sumary products
      </h1>
      <OrderSummary />
    </section>
  )
}
export default SummaryProducts
