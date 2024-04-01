import { useLocation, useNavigate } from "react-router-dom"
import logo from "..//..//images/logo/logo_footer.png"
import { facebook, youtube, instagram } from "../../images/footericons"
function LinkInformation() {
  const path = useLocation().pathname
  const navigate = useNavigate()
  const handleBackHome = () => {
    navigate(path)
  }
  return (
    <section className='right max-lg:w-full h-full overflow-hidden object-cover flex items-center flex-col justify-center'>
      <button
        onClick={handleBackHome}
        className='flex justify-center items-center w-full'
      >
        <img src={logo} alt='logo' className=' h-[72px] max-lg:h-full text-white' />
      </button>
      <nav className='flex items-center justify-center'>
        <a href='' className='text-[30px] px-1 py-0 my-0 hover:text-white'>
          {facebook}
        </a>
        <a href='' className='text-[30px] px-1 py-0 my-0 hover:text-white'>
          {youtube}
        </a>
        <a href='' className='text-[30px] px-1 py-0 my-0 hover:text-white'>
          {instagram}
        </a>
      </nav>
      <span className='text-base mb-2 text-center w-full block'>
        1201 Jupiter Park Dr. Unit 5 <br />
        Jupiter, FL 33458
      </span>
      <p className='text-lg p-0 m-0 text-center hover:text-white'>support@livegood.com</p>
    </section>
  )
}
export default LinkInformation
