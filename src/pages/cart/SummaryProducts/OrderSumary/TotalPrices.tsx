import OrderPrices from "./OrderPrices"

const TotalPrices = () => {
  return (
    <section className='text-black'>
      <OrderPrices />
      <p className='border border-slate-400'></p>
      <nav className='flex items-center text-lg font-bold py-3 justify-between'>
        <div className=''>total</div>
        <p className=''>$100.000</p>
      </nav>
    </section>
  )
}
export default TotalPrices
