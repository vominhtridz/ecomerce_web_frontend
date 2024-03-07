import { BannerImgs } from "../../images/images"
import { bannerType } from "../../typescript/HomeType"
export function BannerUI() {
  return BannerImgs.map((banner: bannerType, index: number) => {
    return (
      <img
        key={index}
        src={banner.img}
        className='w-full h-full'
        alt='banner'
      />
    )
  })
}
