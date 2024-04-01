import { useState } from "react"
import { DownIcon } from "../../../images/centerIcons"
import img from "..//..//..//images//products/USCBP300_BigSize.jpg"

const HistoryBox = () => {
  const [visibleDownIcon, setVisivleDownIcon] = useState<boolean>(false)
  function handleShowMessage() {}
  function handleLeaveHisMess() {
    setVisivleDownIcon(false)
  }
  function handleHoverHisMess() {
    setVisivleDownIcon(true)
  }
  return (
    <button
      className=' hover:bg-[rgba(0,0,0,0.05)]  py-3 pl-3 pr-8 w-full flex '
      onMouseEnter={handleHoverHisMess}
      onMouseLeave={handleLeaveHisMess}
      onClick={handleShowMessage}
    >
      <img src={img} alt='' className='w-8 h-8 rounded-full ' />
      <nav className='px-1.5  w-full '>
        <div className=' flex items-center leading-4   whitespace-nowrap w-full'>
          <p className='text-[13px] text-ellipsis overflow-hidden pr-1 w-[7.5rem] font-semibold '>
            University enchantis
          </p>
          <time className='text-slate-500  text-normal'>18/02</time>
        </div>

        <div className=' flex items-center text-[11.5px] w-full whitespace-nowrap    leading-4'>
          <p className='overflow-hidden text-ellipsis w-[8.5rem]'>
            Ôi trời ơi ngả ngửa vì rẻ, nghe kho báo mà giật mình thon thót 😥😥
          </p>
          {visibleDownIcon && <p className='text-sm  '>{DownIcon}</p>}
        </div>
      </nav>
    </button>
  )
}

export default HistoryBox
