import { useNavigate } from "react-router-dom"
import img from "..//..//..//images/products/USCBP300_BigSize.jpg"
import { useMyContext } from "../../../context/context"

function Products() {
  const { langCode } = useMyContext()
  const navigate = useNavigate()
  const NavigationInfoPage = () => {
    navigate(`/${langCode}/info`)
  }
  return (
    <section className='flex items-center flex-wrap'>
      <div
        onClick={NavigationInfoPage}
        className='lg:w-1/4 p-2  max-lg:w-1/3 max-sm:w-1/2 bg-white  rounded-sm  hover:shadow-2xl cursor-pointer hover:ransition-all duration-500'
      >
        <img src={img} alt='' className='w-full ' />
        <nav className='ml-4 py-6'>
          <span className='rounded-full px-2 py-1 text-sm'>new Products</span>
          <p className='uppercase text-xl my-1'>memmory plus</p>
        </nav>
        <nav className='ml-4 flex items-center justify-between'>
          <p className='text-base text-slate-900 font-semibold'>price</p>
          <div className='text-base '>
            <strong className='text-lg mr-2'>125</strong>
            USD
          </div>
        </nav>
      </div>
    </section>
  )
}
export default Products
