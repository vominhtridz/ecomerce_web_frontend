import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useMyContext } from "../../../context/context"
import { BasicUsers } from "../../../typescript/UserTypes"
import { LoginIcon, PenIcons } from "../../../images/centerIcons"

export const EditAccount = () => {
  const { langCode } = useMyContext()
  const [basicUsers, setBasicUsers] = useState<BasicUsers>()
  useEffect(() => {
    const localBasicUser = localStorage.getItem("basicUsers")
    if (localBasicUser) {
      const getLocalBasicUser = JSON.parse(localBasicUser)
      setBasicUsers(getLocalBasicUser)
    }
  }, [])
  return (
    <div className=' flex items-center mb-6'>
      <Link to={`/${langCode}/user/account/profile`} className='text-2xl p-1.5 border rounded-full  border-slate-400'>
        {LoginIcon}
      </Link>
      <div className='text-base text-slate-500 px-2'>
        <h4 className='text-black font-semibold whitespace-nowrap'>{basicUsers?.userName}</h4>
        <p className='flex items-center text-sm text-slate-700 whitespace-nowrap italic'>
          <span className='block mr-1 text-base'>{PenIcons}</span>
          Sửa Hồ Sơ
        </p>
      </div>
    </div>
  )
}
export default EditAccount
