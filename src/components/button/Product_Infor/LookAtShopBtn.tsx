import { ShopIcon } from "../../../images/centerIcons"

const LookAtShop = () => {
  const handleLookAtShop = () => {}
  return (
    <button
      onClick={handleLookAtShop}
      className=' text-[13.5px] whitespace-nowrap flex items-center rounded-sm  mx-2 py-1 px-2 my-1 text-slate-600 border border-slate-300 '
    >
      <p className='text-lg pr-1'>{ShopIcon}</p>
      Xem Shop
    </button>
  )
}
export default LookAtShop
