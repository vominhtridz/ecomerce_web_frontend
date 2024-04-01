import img from "..//..//images/products/USCBP300_BigSize.jpg"
import img1 from "..//..//images/products/USEFP101_Present.jpg"
import img2 from "..//..//images/products/USHSF150_Present.jpg"
import { ArrowLeft, ArrowRight } from "../../images/centerIcons"
import { ManageProductsTypes } from "../../typescript/HomeType"

const ManageProducts: ManageProductsTypes[] = [
  {
    title: {
      bold: "best",
      provide: "product",
    },
    num: 2,
    imgs: {
      img1: img,
      img2: img1,
    },
  },
  {
    title: {
      bold: "recommend",
      provide: "product",
    },
    num: 1,
    imgs: {
      img1: img2,
      img2: img2,
    },
  },
]

export function ProductsRecommendUI() {
  const getProductsRecommend = () => {
    return ManageProducts.map((item, index) => {
      return (
        <section key={index} className='w-3/6 max-md:w-full pr-4 max-md:mt-10'>
          <nav className='flex items-center  justify-between '>
            <h2 className='uppercase text-2xl font-bold text-slate-700 p-2.5 max-sm:text-[13px] max-lg:text-base max-'>
              <strong className='font-bold pr-2 text-orange-600'>
                {item.title.bold}
              </strong>
              {item.title.provide}
            </h2>
            <span className='flex items-center text-base max-lg:text-sm '>
              <p className=' mr-6 text-lg '>
                <strong className='pr-1'>1</strong>/ {item.num}
              </p>
              <p className='flex items-center rounded-md border border-solid  border-slate-300 mr-2'>
                <button className='p-1.5   border-r border-solid border-slate-200'>
                  {ArrowLeft}
                </button>
                <button className='p-1.5  '>{ArrowRight}</button>
              </p>
            </span>
          </nav>
          <div className='flex items-center'>
            <img src={item.imgs.img1} alt='' className='md:w-3/6 max-md:w-1/2 px-2' />
            {item.imgs.img2 && (
              <img src={item.imgs.img2} alt='' className='md:w-3/6 max-md:w-1/2 px-2' />
            )}
          </div>
        </section>
      )
    })
  }

  return (
    <div className='flex items-center w-full mb-10 lg:px-16 max-lg:px-2 max-lg:flex-wrap'>
      {getProductsRecommend()}
    </div>
  )
}
