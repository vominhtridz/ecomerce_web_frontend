import { ReactElement } from "react"

import NavBar from "./Navbar/Navbar"
import TopHeader from "./TopHeader/TopHeader"

const Header = (): ReactElement => {
  return (
    <header className='  shadow '>
      <div className='fixed top-0  left-0 right-0 z-50 bg-white   border-b border-solid border-slate-200 '>
        <TopHeader />
      </div>
      <div className='fixed top-20 left-0 right-0 z-10  bg-white   border-b border-solid'>
        <NavBar />
      </div>
    </header>
  )
}
export default Header
