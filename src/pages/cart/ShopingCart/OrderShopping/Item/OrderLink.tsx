import { FC } from "react"
import { Link } from "react-router-dom"
import { useMyContext } from "../../../../../context/context"

const OrderLink: FC = () => {
  const { langCode } = useMyContext()
  const handleRemove = () => {}
  return (
    <section className='mx-4 text-base '>
      <button onClick={handleRemove} className='mx-4 text-blue-600 underline'>
        Remove
      </button>
      <Link to={`/${langCode}/wishlist`} className='text-blue-600 underline mx-4'>
        Move to WishList
      </Link>
    </section>
  )
}
export default OrderLink
