import ReviewStarsCommnent from "./ReviewStarsCommnent/ReviewStarsCommnent"
import ReviewStarsItems from "./ReviewStarsItems"

function ReviewStars() {
  return (
    <section className='  text-[14px] p-4 rounded-sm'>
      <ReviewStarsItems />
      <ReviewStarsCommnent />
    </section>
  )
}

export default ReviewStars
