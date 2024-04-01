import { getSelectPrices } from "./GetSelectPrices"

function ProductSelect() {
  return (
    <section className='flex justify-end'>
      <nav className='flex items-center list-none max-md:flex-wrap'>
        {getSelectPrices()}
      </nav>
    </section>
  )
}
export default ProductSelect
