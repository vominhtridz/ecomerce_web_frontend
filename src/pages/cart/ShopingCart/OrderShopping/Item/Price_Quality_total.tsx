import { FC } from "react"

const Price_Quality_total: FC = () => {
  const handleDecrement = () => {}
  const handleIncrement = () => {}
  return (
    <nav className='flex items-center justify-between text-black'>
      <div className='px-5'>
        <h4 className='lg:text-lg max-lg:text-base font-bold '>Price</h4>
        <span className='block text-red-500'>$260Đ</span>
      </div>
      <div className='px-5'>
        <h4 className='lg:text-lg max-lg:text-base font-bold '>Quality</h4>
        <span className='flex items-center'>
          <button className='px-2 text-xl' onClick={handleDecrement}>
            -
          </button>
          <p className='text-red-500'>1</p>
          <button className='px-2 text-xl' onClick={handleIncrement}>
            +
          </button>
        </span>
      </div>
      <div className='px-5'>
        <h4 className='lg:text-lg max-lg:text-base font-bold '>Total</h4>
        <span className='block text-red-500'>$260Đ</span>
      </div>
    </nav>
  )
}
export default Price_Quality_total
