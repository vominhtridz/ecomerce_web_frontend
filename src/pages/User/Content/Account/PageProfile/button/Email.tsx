import { Link } from "react-router-dom"
import { useMyContext } from "../../../../../../context/context"

const UserEmail = () => {
  const { langCode } = useMyContext()

  return (
    <nav className='flex items-center py-2 ml-14'>
      <p className=''>Email </p>
      <label className='px-2 text-black'>trilov**@gmail.com</label>
      <Link to={`/${langCode}/user/account/PhoneNumber`} className='text-blue-700 px-2 underline'>
        Thay Đổi
      </Link>
    </nav>
  )
}
export default UserEmail
