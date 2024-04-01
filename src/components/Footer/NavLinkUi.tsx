import { Link } from "react-router-dom"
import { useMyContext } from "../../context/context"

interface NavbarTypes {
  route: string
  title: string
}
function NavLinkUI() {
  const { language, langCode } = useMyContext()

  const getNavLInkUi = () => {
    return language?.footer.options.navbar.map((navbar: NavbarTypes, index: number) => {
      return (
        <Link
          key={index}
          rel='stylesheet'
          to={navbar.route}
          className={`px-2 whitespace-nowrap flex  items-center ${langCode === "vi" ? "text-sm" : "text-[18px]"}`}
        >
          <p className='hover:text-white'>{navbar.title}</p>
          <span className={`px-1 ${navbar.title === "FAQ" ? "hidden" : ""}`}>|</span>
        </Link>
      )
    })
  }
  return (
    <section className='list-none flex items-center justify-center pb-3.5 flex-wrap'>
      {getNavLInkUi()}
    </section>
  )
}
export default NavLinkUI
