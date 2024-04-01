import { VisibleProducts } from "../VisibleProduct/VisibleProducts"
import SizeProduct from "./SizeProduct/SizeProduct"
import ProductSelect from "./ProductSelect/ProductSelect"
function ProductsUI() {
  return (
    <div className='px-16 my-6 max-lg:px-2'>
      <div className='mb-6'>
        <SizeProduct />
        <hr />
        <ProductSelect />
        <p className='border border-solid w-full border-black'></p>
      </div>
      <VisibleProducts />
    </div>
  )
}

export default ProductsUI
