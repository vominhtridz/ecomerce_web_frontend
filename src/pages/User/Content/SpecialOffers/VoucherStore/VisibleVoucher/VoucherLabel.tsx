import freeShip from "..//..//..//..//..//..//images/products/freeShipImg.png"

const VoucherLabel = () => {
  return (
    <div className='bg-[#00bfa5] relative w-[7.375rem] flex-col text-white flex  items-center h-[116px] justify-center'>
      <img src={freeShip} alt='' className='w-[56px] h-[56px] rounded-sm' />
      <p className=' text-[11px]'>Giảm tối đa 300K</p>

      <label className='text-[11px] text-white bg-yellow-500  absolute top-1 left-0'>Khách hàng mới</label>
    </div>
  )
}
export default VoucherLabel
