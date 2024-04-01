import { useState } from "react"
import { useMyContext } from "../../../context/context"
import { ArrowLeft, ArrowRight, DownIcon } from "../../../images/centerIcons"

const EditSizeButton = () => {
  const { setVisibleMess } = useMyContext()
  const [widthSize, setWidthSize] = useState<boolean>(false)
  function handleEnlarge() {
    setWidthSize(false)
  }
  function handleColapse() {
    setWidthSize(true)
  }
  function handleShutDown() {
    setVisibleMess(false)
  }
  return (
    <div className='flex items-center'>
      {widthSize ? (
        <button
          onClick={handleEnlarge}
          className='text-[12px] transition duration-500 mx-2 py-1 text-black border border-slate-400 rounded-sm flex items-center justify-center px-1'
        >
          {ArrowLeft}
        </button>
      ) : (
        <button
          onClick={handleColapse}
          className='text-[12px] transition duration-500 mx-2 py-1 text-black border border-slate-400 rounded-sm flex items-center justify-center px-1'
        >
          {ArrowRight}
        </button>
      )}
      <button
        onClick={handleShutDown}
        className='text-[12px] transition duration-600 mx-2 py-1 text-black border border-slate-400 rounded-sm flex items-center justify-center px-1'
      >
        {DownIcon}
      </button>
    </div>
  )
}

export default EditSizeButton
