import { useRef, useState } from "react"
import { LoginIcon } from "../../../../../../images/centerIcons"
const SetUpUserImage = () => {
  const [file, setFile] = useState<string>("")
  const fileUserImg = useRef<HTMLInputElement>(null)
  function handleChange(e) {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }
  const handleSetImage = () => fileUserImg.current?.click()
  return (
    <div className='border-l border-slate-400 flex p-4 flex-col items-center px-10'>
      {file && (
        <img src={file} className='w-[130px] rounded-full cursor-pointer    h-[130px] my-8' onClick={handleSetImage} />
      )}
      {!file && (
        <div
          onClick={handleSetImage}
          className='cursor-pointer w-[130px] text-[5rem] border border-slate-300 flex items-center justify-center rounded-full    h-[130px] my-8'
        >
          {LoginIcon}
        </div>
      )}

      <input type='file' multiple onChange={handleChange} ref={fileUserImg} name='fileUserImg' className='hidden' />
      <label
        htmlFor='fileUserImg'
        className='border border-slate-400  rounded-md cursor-pointer inline-block hover:bg-slate-50 px-4 py-1.5 text-sm'
        onClick={handleSetImage}
      >
        Chọn Ảnh
      </label>

      <p className='text-[13px] py-6 text-black '>
        Dụng lượng file tối đa 1 MB <br />
        Định dạng:.JPEG, .PNG
      </p>
    </div>
  )
}
export default SetUpUserImage
