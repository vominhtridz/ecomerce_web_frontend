import { Link, useLocation, useNavigate } from "react-router-dom"
import LanguageSelector from "./LanguageSelector/LanguageSelector"
import { useMyContext } from "../../context/context"
import { languageType } from "../../typescript/languageType"
interface navbar {
  route: string
  title: string
}
const NavBar = () => {
  const { language }: languageType = useMyContext()
  const path = useLocation().pathname
  const navigate = useNavigate()
  function handleNavbarClient() {
    console.log(path)
  }
  function NavBarClient() {
    return language.header.navbar.map((navbar: navbar, index: number) => {
      return (
        <li
          key={index}
          className={`p-2 font-semibold
          hover:text-green-500 	text-[17px]
          ${path === navbar.route ? "border-b-[3.5px] border-solid border-[#66a92f]" : ""}
          text-slate-800  whitespace-nowrap tracking-tighter `}
        >
          <Link
            to={navbar.route}
            className='tracking-tighter '
            onClick={handleNavbarClient}
          >
            {navbar.title}
          </Link>
        </li>
      )
    })
  }
  return (
    <nav className='flex items-center list-none grow-0 shrink-0'>
      {/* Sử dụng vòng lặp để render các mục thanh điều hướng */}
      {NavBarClient()}
      <LanguageSelector />
    </nav>
  )
}
export default NavBar
