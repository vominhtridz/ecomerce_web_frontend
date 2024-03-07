import { FC } from "react"
import { useMyContext } from "../../context/context"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "..//..//images/logo/logo_footer.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons"
import { facebook, youtube, instagram } from "../../images/footericons"
const Footer: FC = () => {
  const { language } = useMyContext()
  const path = useLocation().pathname
  const navigate = useNavigate()
  const handleBackHome = () => {
    navigate(path)
    window.location.reload()
  }
  function navLinkUI() {
    return language.footer.options.navbar.map((navbar, index: number) => {
      return (
        <Link
          key={index}
          rel='stylesheet'
          to={navbar.route}
          className='py-2 whitespace-nowrap flex items-center'
        >
          <p className='hover:text-white'>{navbar.title}</p>
          <span className={`px-1 ${navbar.title === "FAQ" ? "hidden" : ""}`}>
            |
          </span>
        </Link>
      )
    })
  }

  function licenseUI() {
    return language.footer.options.license.map((license, index: number) => {
      return (
        <Link
          key={index}
          rel='stylesheet'
          to={license.route}
          className='whitespace-nowrap flex items-center '
        >
          <p className='hover:text-white'>{license.title}</p>

          <span
            className={`px-1 ${license.title === "Certificates Of Analysis" ? "hidden" : ""}`}
          >
            |
          </span>
        </Link>
      )
    })
  }

  return (
    <footer className=' bg-black w-full h-[240px] pb-10 flex justify-between text-slate-400   px-10 overflow-hidden '>
      <section className='left'>
        <div className='list-none flex items-center '>{navLinkUI()}</div>
        <div className='flex items-center'>{licenseUI()}</div>
        <div className='p-2 my-6 mx-2 border-2 text-[11px] border-solid border-slate-100 w-full'>
          <p className=''>
            *These statements have not been evaluated by the Food and Drug
            Administration.
          </p>
          <p className=''>
            These products are not intended to diagnose, treat, cure or prevent
            any disease.
          </p>
        </div>
        <span className='text-xl'>Copyright © 2021 All Rights Reserved</span>
      </section>
      {/* right */}
      <section className='right '>
        <button onClick={handleBackHome}>
          <img
            src={logo}
            alt='logo'
            className='w-[350px] h-[100px] text-white'
          />
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
        <p className='text-lg p-0 m-0 text-center hover:text-white'>
          support@livegood.com
        </p>
      </section>
    </footer>
  )
}
export default Footer
