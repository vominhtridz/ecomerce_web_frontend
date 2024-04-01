import moc_do from "..//..//..//images/InforProduct/moc_do.jfif"
import moc_2 from "..//..//..//images/products/USEFP101_Present.jpg"
import {
  FacebookIcon,
  TwitchIcon,
  PinterestIcon,
  messengerIcon,
  HeartIcon,
  ShopWhiteIcon,
} from "../../../images/centerIcons"
const ManageShareIcon = [FacebookIcon, TwitchIcon, PinterestIcon, messengerIcon]

const ImageItems = () => {
  const handleLookPhoto = () => {}
  function getManageShareIcon() {
    return ManageShareIcon.map(icon => {
      return <p className='text-2xl px-1.5'>{icon}</p>
    })
  }
  return (
    <div className='text-sm text-black w-1/3'>
      {moc_do ? (
        <img src={moc_do} onClick={handleLookPhoto} className='object w-full h-[350px] rounded-sm ' alt='' />
      ) : (
        <p className='object w-full h-[350px] rounded-sm text-slate-500'>{ShopWhiteIcon}</p>
      )}
      <nav className='flex items-cente my-6'>
        <img src={moc_2} className='w-1/5 h-[82px] mx-2 rounded-sm ' alt='' />
        <img src={moc_2} className='w-1/5 h-[82px] mx-2 border border-red-500 rounded-sm ' alt='' />
      </nav>

      <nav className='flex items-center  my-10 whitespace-nowrap'>
        <p className='flex text-[15px] items-center '>Chia sẻ: {getManageShareIcon()}</p>
        <p className='text-xl text-slate-200 px-4'>|</p>
        <p className='flex items-center text-base'>
          <span className='px-2 text-2xl text-red-500'>{HeartIcon} </span>
          Đã thích (3,3k)
        </p>
      </nav>
    </div>
  )
}
export default ImageItems
