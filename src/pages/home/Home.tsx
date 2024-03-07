import { FC } from "react"
import { BannerUI } from "./BannerUI"
import { HomeFeaturesUI } from "./HomeFeaturesUI"
import { ProductsRecommendUI } from "./ProductsRecommendUI"
import { useMyContext } from "../../context/context"
import ProductsUI from "./ProductsUI"
const Home: FC = () => {
  const { language } = useMyContext()
  return (
    <center className='pt-[100px]'>
      <section className='list-none flex items-center w-full h-[539px] overflow-hidden'>
        {BannerUI()}
      </section>
      <section className='text-center px-36 text-[20px]'>
        {language.center.introduce}
      </section>
      <section className='list-none flex items-center px-10 my-16'>
        {HomeFeaturesUI()}
      </section>
      <section className='py-6'>{ProductsRecommendUI()}</section>
      <section className='products'>{ProductsUI()}</section>
    </center>
  )
}

export default Home
