import img from "..//..//images/products/USCBP300_BigSize.jpg"
import { ArrowLeft, ArrowRight } from "../../images/centerIcons"
const manageProducts = {}
export function ProductsRecommendUI() {
  const getProductsRecommend = () => {
    return (
      <section className='w-3/6 px-10'>
        <nav className='flex items-center  justify-between '>
          <h2 className='uppercase text-2xl font-bold text-slate-600 p-2.5'>
            <strong className='font-bold pr-2 text-orange-600'>BEST</strong>
            products
          </h2>
          <span className='flex items-center text-base'>
            <p className='mr-6 text-lg'>
              <strong className='pr-1'>1</strong>/ 2
            </p>
            <p className='flex items-center rounded-md border border-solid border-slate-300 mr-2'>
              <button className='p-1.5   border-r border-solid border-slate-200'>
                {ArrowLeft}
              </button>
              <button className='p-1.5  '>{ArrowRight}</button>
            </p>
          </span>
        </nav>
        <div className='flex items-center'>
          <img src={img} alt='' className='w-3/6' />
          <img src={img} alt='' className='w-3/6' />
        </div>
      </section>
    )
  }

  return (
    <div className='flex items-center w-full '>{getProductsRecommend()}</div>
  )
}
