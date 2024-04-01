import { ChangeEvent, FC } from "react"

interface PartSexTypes {
  gender: string
  handleGenderChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const manageGenderInput = [
  {
    sex: "Nam",
    value: "Nam",
  },
  {
    sex: "Nữ",
    value: "Nữ",
  },
  {
    sex: "Khác",
    value: "Khác",
  },
]
const PartSex: FC<PartSexTypes> = ({ handleGenderChange, gender }) => {
  const getGenderInput = () => {
    return manageGenderInput.map((item, index) => {
      return (
        <button className='flex items-center text-[15px]' key={index}>
          <input
            type='radio'
            value={item.value}
            checked={gender === item.value}
            className='text-lg px-1 block hover:cursor-pointer'
            onChange={handleGenderChange}
          />
          <p className='px-1.5 text-black'>{item.sex}</p>
        </button>
      )
    })
  }
  return (
    <div className='flex items-center py-2 ml-10'>
      <h2 className='pr-4'>Giới tính</h2>
      {getGenderInput()}
    </div>
  )
}

export default PartSex
