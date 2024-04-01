import { manageCategory } from "."
import LeftBtn from "../../../components/button/Home/LeftBtn"
import RightBtn from "../../../components/button/Home/RightBtn"
import { Link } from "react-router-dom"
import { useMyContext } from "../../../context/context"
import { useRef } from "react"

const Category = () => {
  const { langCode } = useMyContext()
  const UlRef = useRef<HTMLUListElement>(null)
  function getCategory() {
    return manageCategory.map((category, index) => {
      console.log(index)
      return (
        <Link
          to={`/${langCode}${category.route}`}
          key={index}
          className='border    hover:shadow-lg border-l-0 border-b-0  border-slate-200 h-1/2 justify-center items-center flex flex-col rounded-sm px-2 w-[125.4px]'
        >
          <div className='w-[107px] h-[107px]'>
            <img src={category.image} alt='' className='w-full h-full' />
          </div>
          <p className='text-sm'>{category.name}</p>
        </Link>
      )
    })
  }
  const HandleMoveLeft = () => {
    if (UlRef.current) {
      UlRef.current.style.marginLeft = `0`
    }
  }
  const HandleMoveRight = () => {
    console.log(UlRef.current)
    if (UlRef.current) {
      UlRef.current.style.marginLeft = `-17rem`
    }
  }
  return (
    <div className=' mx-10 my-10 p-3 relative bg-white rounded-sm'>
      <h2 className='px-2 text-lg text-slate-500 text-left uppercase'>danh mục</h2>
      <LeftBtn HandleMoveLeft={HandleMoveLeft} />
      <section className='overflow-hidden '>
        <ul
          ref={UlRef}
          className='list-none h-[26rem] transition duration-500 
           flex flex-col   p-4 rouned-sm bg-white flex-wrap overflow-hidden
        '
        >
          {getCategory()}
        </ul>
      </section>
      <RightBtn HandleMoveRight={HandleMoveRight} />
    </div>
  )
}
export default Category
