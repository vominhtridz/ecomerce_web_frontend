import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"

interface InputNameTypes {
  inputName: string
  ChangeInputName: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputName: FC<InputNameTypes> = ({ inputName, ChangeInputName }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (inputName === "") return
    localStorage.setItem("username", inputName)
  }

  const [userName, setUserName] = useState<string>("")
  useEffect(() => {
    const localStorageUserName = localStorage.getItem("username")
    if (localStorageUserName) {
      const parsedUserName = JSON.parse(localStorageUserName)
      setUserName(parsedUserName)
    }
  }, [])
  return (
    <form className='flex items-center pl-[4.3rem] w-full ' onSubmit={handleSubmit}>
      <p className='whitespace-nowrap'>Tên </p>
      <div className='pl-4 w-full'>
        <input
          autoComplete='new-password'
          type='text'
          className='outline-none w-full p-2 text-sm transition duration-500   border my-2  text-black border-slate-400 rounded-sm '
          placeholder='Nhập tên của bạn...'
          onChange={ChangeInputName}
          value={inputName === "" ? userName : inputName}
          required
        />
      </div>
    </form>
  )
}
export default InputName
