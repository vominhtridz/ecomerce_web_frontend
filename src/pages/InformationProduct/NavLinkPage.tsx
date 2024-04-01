import { Link } from "react-router-dom"
import { useMyContext } from "../../context/context"
import { NoSlashRight } from "../../images/centerIcons"

const NavLinkPage = () => {
  const { langCode } = useMyContext()
  return (
    <nav className='flex my-4 items-center  text-sm text-blue-600 py-1'>
      <Link to={`/${langCode}`} className=''>
        Livegood
      </Link>
      <p className='px-2 text-[11px] text-black'>{NoSlashRight}</p>
      <Link to={`/${langCode}`} className=''>
        nhà cửa & đời sống
      </Link>
      <p className='px-2 text-[11px] text-black'>{NoSlashRight}</p>
      <Link to={`/${langCode}`} className=''>
        Chăm sóc nhà cửa và giặt ủi
      </Link>
      <p className='px-2 text-[11px] text-black'>{NoSlashRight}</p>
      <Link to={`/${langCode}`} className=''>
        Móc quần áo
      </Link>
    </nav>
  )
}
export default NavLinkPage
