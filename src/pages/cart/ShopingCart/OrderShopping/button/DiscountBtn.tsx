import { FC } from "react"

const DiscountBtn: FC = () => {
  const handleCheckout = () => {}
  return (
    <button
      onClick={handleCheckout}
      className='text-lg text-white bg-green-500 rounded-lg w-full py-2 my-6 font-bold'
    >
      Express Checkout
    </button>
  )
}
export default DiscountBtn
