import { getPrices } from ".."
import { useMyContext } from "../../../../context/context"

function SizeProduct() {
  const { language } = useMyContext()

  return (
    <section className='flex items-center justify-between pb-2'>
      <nav className='flex items-center'>
        <strong className='text-green-600 mr-2'>71</strong>
        <p className=' whitespace-nowrap max-md:text-base'>
          {language?.center.products.totalProducts}
        </p>
      </nav>
      <nav className='flex items-center '>
        <div className='flex items-center lg:mr-6 max-lg:mr-2 border max-md:text-[12px] font-semibold border-solid rounded-md border-slate-400'>
          <button className='px-3 py-1 text-slate-500 '>GBM</button>
          <button className='px-3 py-1 bg-blue-700 text-white'>GM</button>
        </div>
        <select className='flex items-center border border-solid cursor-pointer border-slate-500 px-2 py-1'>
          {getPrices()}
        </select>
      </nav>
    </section>
  )
}
export default SizeProduct
