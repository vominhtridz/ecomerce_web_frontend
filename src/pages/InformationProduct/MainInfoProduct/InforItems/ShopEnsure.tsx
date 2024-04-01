import { EnsureIcon } from "../../../../images/centerIcons"

const ShopEnsure = () => {
  return (
    <section className='flex items-center text-sm'>
      <nav className='text-sm  flex items-center'>
        <p className='text-3xl text-red-500'>{EnsureIcon}</p>
        <p className='px-1'>Livegood Đảm bảo</p>
      </nav>
      <p className='px-6 text-slate-500'>Trả hàng miễn phí trong 15 ngày</p>
    </section>
  )
}
export default ShopEnsure
