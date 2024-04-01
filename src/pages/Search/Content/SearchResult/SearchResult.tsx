import { IdeaIcon } from "../../../../images/centerIcons"
import { VisibleProducts } from "../../../home/VisibleProduct/VisibleProducts"
import ListArrangeProducts from "./ListArrangeProducts"

const SearchResult = () => {
  return (
    <section className='w-full'>
      <h2 className=' flex items-center text-slate-800 text-base'>
        <p className='px-2 text-lg'>{IdeaIcon}</p> Kết quả tìm kiếm 'quần ống rộng'
      </h2>
      <ListArrangeProducts />
      <VisibleProducts />
    </section>
  )
}
export default SearchResult
