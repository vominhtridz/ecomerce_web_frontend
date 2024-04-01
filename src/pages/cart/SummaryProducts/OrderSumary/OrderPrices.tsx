const OrderPrices = () => {
  return (
    <div className='mb-3'>
      <nav className='flex items-center justify-between text-lg '>
        <div className='uppercase text-base '>Subtotal</div>
        <p className=' '>#400.00</p>
      </nav>
      <nav className='flex items-center justify-between text-lg '>
        <div className='uppercase text-base '>Shipping</div>
        <p className=' '>1234</p>
      </nav>
      <nav className='flex items-center justify-between text-lg '>
        <div className='uppercase text-base '>estimated tax</div>
        <p className=' '>$10.00</p>
      </nav>
    </div>
  )
}
export default OrderPrices
