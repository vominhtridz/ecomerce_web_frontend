import { Link, useLocation } from "react-router-dom"
import LanguageSelector from "./LanguageSelector/LanguageSelector"
import { useEffect } from "react"
import { useMyContext } from "../../context/context"
const NavBar = () => {
  const { language } = useMyContext()
  const NavBarClient = () =>
    language.header.navbar.map((navbar, index) => (
      <li key={index}>
        <Link to=''>{navbar}</Link>
      </li>
    ))
  return (
    <nav className='flex items-center list-none'>
      {/* Sử dụng vòng lặp để render các mục thanh điều hướng */}
      {NavBarClient()}
      <LanguageSelector />
    </nav>
  )
}
export default NavBar
