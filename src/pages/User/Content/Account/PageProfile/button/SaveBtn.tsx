import { useNavigate } from "react-router-dom"
import { useMyContext } from "../../../../../../context/context"

const SaveInfoBtn = () => {
  const { langCode } = useMyContext()
  const navigate = useNavigate()
  const handleSavesInfo = () => {}
  return (
    <button className='px-6 py-2 ml-16 bg-red-500 my-6  text-white rounded-md' onClick={handleSavesInfo}>
      Lưu
    </button>
  )
}
export default SaveInfoBtn
