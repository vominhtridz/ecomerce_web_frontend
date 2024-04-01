import { Link } from "react-router-dom"

import img from "..//..//..//..//images/products/USEFP101_Present.jpg"
import { useMyContext } from "../../../../context/context"

import { useState } from "react"
import ReviewAccount from "./ReviewAccount"
import ReviewComment from "./ReviewComment"
const ReviewStarsCommnent = () => {
  const { langCode } = useMyContext()
  const [color, setColor] = useState<boolean>(false)
  const handleLike = () => setColor(!color)
  return (
    <div className='py-4 border-b flex border-slate-200'>
      <Link to={`/${langCode}/my`} className='mr-4 w-12 h-12'>
        <img src={img} alt='' className='rounded-full w-full h-full' />
      </Link>

      <div className=''>
        <ReviewAccount />
        <ReviewComment color={color} handleLike={handleLike} />
      </div>
    </div>
  )
}

export default ReviewStarsCommnent
