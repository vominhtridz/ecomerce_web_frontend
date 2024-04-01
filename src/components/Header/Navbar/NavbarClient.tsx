import { Link, useLocation } from "react-router-dom"
import { useMyContext } from "../../../context/context"
interface navbar {
  route: string
  title: string
}
export function NavBarClient() {
  const { language } = useMyContext()
  const path = useLocation().pathname
  function handleNavbarClient() {
    console.log(path)
  }
  return language?.header.navbar.map((navbar: navbar, index: number) => {
    return (
      <li
        key={index}
        className={`p-2 font-semibold
           	text-[17px]
           max-lg:w-full  
          ${path === navbar.route ? " transition duration-600 border-b-[3.5px] border-solid border-[#66a92f] " : ""}
          text-slate-700  whitespace-nowrap tracking-tighter `}
      >
        <Link
          to={navbar.route}
          className={`tracking-tighter hover:text-green-500  text-slate-500   ${path == navbar.route ? "text-orange-500" : ""}
            lg:text-base max-lg:text-sm
            `}
          onClick={handleNavbarClient}
        >
          {navbar.title}
        </Link>
      </li>
    )
  })
}
