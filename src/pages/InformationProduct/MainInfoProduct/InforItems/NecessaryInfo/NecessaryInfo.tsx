import AddToCartBtn from "../../../../../components/button/Cart/AddToCartBtn"
import AddCartOrBuy from "./AddCartOrBuyBtn"
import Classify from "./Classify"
import DiscountCode from "./DiscountCode"
import Quality from "./Quality"
import ReturnPolicy from "./ReturnPolicy"
import Transport from "./Transport"

const NecessaryInfor = () => {
  return (
    <section className='px-6 py-2 w-full'>
      <DiscountCode />
      <ReturnPolicy />
      <Transport />
      <Classify />
      <Quality />
      <AddCartOrBuy />
      <p className='border-b w-full border-slate-200'></p>
    </section>
  )
}
export default NecessaryInfor
