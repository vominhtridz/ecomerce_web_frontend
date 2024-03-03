import { ReactElement } from "react"
import logo from "..//..//images/logo/logo.png"
import { Link } from "react-router-dom"
import NavBar from "./Navbar"
const Header = (): ReactElement => {
  return (
    <section className='h-[100px] border-b border-solid border-slate-200 flex justify-between items-center'>
      {/* logo */}
      <Link to='/'>
        <img src={logo} alt='logo' className='w-[280px] h-[72px]' />
      </Link>
      <NavBar />
    </section>
  )
}
export default Header
