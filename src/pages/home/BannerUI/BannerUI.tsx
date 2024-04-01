import { GetBannerImg } from "./GetBannerImg"

export function BannerUi() {
  return (
    <section className='list-none  mb-20   w-full   overflow-hidden '>
      <div className='  flex items-center ' id='bannerParent'>
        {/* render ảnh banner */}
        {GetBannerImg()}
      </div>
    </section>
  )
}
