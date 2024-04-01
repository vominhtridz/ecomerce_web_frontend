import { useState } from "react"

const DiscountCode = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const handleFocus = () => setVisible(true)
  const handleBlur = () => setVisible(false)
  return (
    <nav className='flex items-center my-2 text-[14px] leading-5'>
      <p className='pr-6'>
        Mã giảm giá <br /> của shop
      </p>
      <div className='relative'>
        <label htmlFor='' className={` text-12px bg-red-50 py-1 rounded-sm  text-red-500 px-4`} onFocus={handleFocus}>
          giảm 2k
        </label>
        {/* hover hiện 1 lớp con nhãn giảm giá */}
        {/* {visible && <div className='absolute p-2 top-full  bg-white shadow-md' onBlur={handleBlur}></div>}
        <div className='p-2 bg-white shadow-md' onBlur={handleBlur}>
          hello my friend
        </div> */}
      </div>
    </nav>
  )
}
export default DiscountCode
