import { FC } from "react"
import img from "..//..//..//..//images/products/USCBP300_BigSize.jpg"

import ItemsOfname from "./Item/ItemsOfName"
const ImageAndItems: FC = () => {
  return (
    <div className='flex  '>
      <img src={img} alt='img' className='lg:w-[200px] lg:h-[200px] rounded-sm' />
      <ItemsOfname />
    </div>
  )
}
export default ImageAndItems
