import { NewIcon } from "../../../../images/centerIcons"
import { useMyContext } from "../../../../context/context"
import VoucherForYou from "./VoucherForYou"
export const SpecialOffers = () => {
  const { langCode } = useMyContext()
  const handleShow = () => {}
  return (
    <div className='py-1'>
      <button className='flex ' onClick={handleShow}>
        <p className='text-2xl mr-1.5 text-black rounded-full'>{NewIcon}</p>
        <p className='text-[14px] whitespace-nowrap hover:text-green-600 leading-4'>
          Ưu Đãi Dành riêng <br /> cho bạn
        </p>
      </button>
      <VoucherForYou />
    </div>
  )
}
export default SpecialOffers
