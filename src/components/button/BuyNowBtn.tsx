import { useNavigate } from "react-router-dom"

const BuyNowBtn = () => {
  const naviagete = useNavigate()
  const handleBuy = () => {}
  return (
    <button onClick={handleBuy} className='mx-4 px-8 h-[42px] flex items-center rounded-sm bg-green-500 text-white'>
      Mua Ngay
    </button>
  )
}
export default BuyNowBtn
