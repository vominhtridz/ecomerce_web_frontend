import NecessaryInfor from "./NecessaryInfo/NecessaryInfo"
import ProductPrices from "./ProductPrices"
import ReviewProduct from "./ReviewProduct"
import ShopEnsure from "./ShopEnsure"

const InforItems = () => {
  return (
    <div className='text-slate-700 w-full text-[11px] px-10'>
      <h2 className='text-[22px] font-semibold   text-slate-600'>Sét 45 chiếc móc nhôm người lớn</h2>
      <ReviewProduct />
      <ProductPrices />
      <NecessaryInfor />
      <ShopEnsure />
    </div>
  )
}
export default InforItems
