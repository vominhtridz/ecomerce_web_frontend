import { Link } from "react-router-dom"

import { FC } from "react"
import { useMyContext } from "../../../../../context/context"

const ItemsOfname: FC = () => {
  const { langCode } = useMyContext()

  return (
    <nav className='px-6 flex flex-col justify-between items-center'>
      <div className=''>
        <p className='flex justify-center text-lg font-semibold text-black'>Items</p>
        <span className='flex items-center nameProducts italic'>
          <h4 className='py-1 pr-2 font-bold text-xl not-italic'>Summer sunnies</h4>
        </span>
        <span className='flex items-center nameProducts italic'>
          <h4 className='py-1 pr-2 font-bold not-italic'>Style</h4>
          asdasd
        </span>
        <span className='flex items-center nameProducts italic'>
          <h4 className='py-1 pr-2 font-bold not-italic'>Color</h4>
          asdasd
        </span>
        <span className='flex items-center nameProducts italic'>
          <h4 className='py-1 pr-2 font-bold not-italic'>Size</h4>
          xxl
        </span>
      </div>
      <Link to={`/${langCode}/fixed`} className='text-blue-600 underline'>
        Edit
      </Link>
    </nav>
  )
}
export default ItemsOfname
