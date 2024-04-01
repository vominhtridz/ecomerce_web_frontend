import { Link } from "react-router-dom"
import { useMyContext } from "../../../../context/context"
import { LoginIcon } from "../../../../images/centerIcons"

export const GetOptionsOflogins = () => {
  const { langCode } = useMyContext()
  return (
    <Link
      to={`/${langCode}/login`}
      className='text-slate-500 hover:text-green-600 flex items-center whitespace-nowrap px-2'
    >
      <div className='text-xl pr-1'>{LoginIcon}</div>
      <p className=' '>Login</p>
    </Link>
  )
}
