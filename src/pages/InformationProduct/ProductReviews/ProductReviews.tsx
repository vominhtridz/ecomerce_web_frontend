import PageProduct from "../../../components/button/PageProducts"
import ReviewStars from "./ReviewStars"

const ProductReviews = () => {
  return (
    <div className='p-4 bg-white rounded-sm my-4 shadow'>
      <h2 className='text-base pb-2  font-semibold'>ĐÁNH GIÁ SẢN PHẨM</h2>
      <ReviewStars />
      <PageProduct />
    </div>
  )
}
export default ProductReviews
