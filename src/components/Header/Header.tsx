import { ReactElement } from "react"
import logo from "..//..//images/logo/logo.png"
import { useNavigate } from "react-router-dom"
import NavBar from "./Navbar"
const Header = (): ReactElement => {
  const path = window.location.pathname
  const navigate = useNavigate()
  function handleNaviHome() {
    navigate(`${path}`)
    window.location.reload()
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white h-[100px] p-5 border-b border-solid border-slate-200 shadow flex justify-between items-center'>
      {/* logo */}
      <button
        onClick={handleNaviHome}
        className='w-[240px] h-full grow-1 shrink-1'
      >
        <img src={logo} alt='logo' className='w-full h-full' />
      </button>
      <NavBar />
    </header>
  )
}
export default Header
