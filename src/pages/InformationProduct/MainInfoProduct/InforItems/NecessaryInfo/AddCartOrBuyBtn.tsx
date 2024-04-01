import BuyNowBtn from "../../../../../components/button/BuyNowBtn"
import AddToCartBtn from "../../../../../components/button/Cart/AddToCartBtn"

const AddCartOrBuy = () => {
  return (
    <nav className='flex text-[12.5px] my-4 items-center'>
      <AddToCartBtn />
      <BuyNowBtn />
    </nav>
  )
}
export default AddCartOrBuy
