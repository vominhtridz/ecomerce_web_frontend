import { useNavigate } from "react-router-dom"
import { GoogleIcon } from "../../../images/centerIcons"

const BuyWithGBay = () => {
  const naviaget = useNavigate()
  const handleGoogleBay = () => {}
  return (
    <button
      onClick={handleGoogleBay}
      className='w-full py-4   justify-center bg-black text-white text-base flex items-center'
    >
      Buy With <p className='px-2'>{GoogleIcon}</p> Pay
    </button>
  )
}
export default BuyWithGBay
