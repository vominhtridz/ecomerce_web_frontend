const UserVoucher = () => {
  const handleUse = () => {}
  return (
    <section className='bg-white rounded-sm my-6 p-4'>
      <h2 className='text-base font-semibold '>Voucher</h2>
      <label
        htmlFor=''
        className=' flex items-center my-2 w-[20rem] justify-between text-red-500 border  border-red-300 rounded-sm bg-red-50 py-3 px-1.5'
      >
        <nav className='text-sm '>
          <p className=''>Giảm 2k</p>
          <p>Đơn tối thiểu</p>
          <p className=''>HSD:17/3/2024</p>
        </nav>
        <button className='px-4 bg-white border border-red-300 rounded-sm py-1 text-[12px] ' onClick={handleUse}>
          Dùng ngay
        </button>
      </label>
    </section>
  )
}

export default UserVoucher
