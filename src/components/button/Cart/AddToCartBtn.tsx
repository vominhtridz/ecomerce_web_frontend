import { useNavigate } from "react-router-dom"
import { AddCartIcon } from "../../../images/centerIcons"

const AddToCartBtn = () => {
  const naviaget = useNavigate()
  const handleAddToCart = () => {}
  return (
    <button
      onClick={handleAddToCart}
      className='px-4 py-2 flex items-center rounded-sm border border-green-600 bg-green-50 text-green-800'
    >
      <p className='text-2xl px-2'>{AddCartIcon}</p>
      <p className=''>Thêm vào giỏ hàng</p>
    </button>
  )
}
export default AddToCartBtn
