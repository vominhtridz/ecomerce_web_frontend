import { FC } from "react"
import RecommendProducts from "./RecmdProduct/RecommendProducts"
import SeeMoreBtn from "../../../components/button/SeeMorebtn"

const MoreProducts: FC = () => {
  return (
    <section className=''>
      <div className=''>
        <h1 className='px-4 py-2 text-xl mt-14 font-bold uppercase border-b-2 border-slate-300'>You May also Like</h1>
        <RecommendProducts />
      </div>
      <div className='flex justify-center'>
        <SeeMoreBtn />
      </div>
    </section>
  )
}
export default MoreProducts
