import { Link, useNavigate } from "react-router-dom"
import { useMyContext } from "../../../../../../context/context"

const AddPhoneNumber = () => {
  const { langCode } = useMyContext()

  return (
    <nav className='flex items-center py-2 ml-2'>
      <p className=''>Số điện thoại </p>
      <Link to={`/${langCode}/user/account/PhoneNumber`} className='text-blue-700 px-4 underline'>
        Thêm
      </Link>
    </nav>
  )
}
export default AddPhoneNumber
