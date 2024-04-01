import { ChangeEvent, FC } from "react"
import { getDay, getMonth, getYear } from "."
interface BirthdayFieldTypes {
  day: string
  month: string
  year: string
  handleDayChange: (e: ChangeEvent<HTMLSelectElement>) => void
  handleMonthChange: (e: ChangeEvent<HTMLSelectElement>) => void
  handleYearChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const BirthdayField: FC<BirthdayFieldTypes> = ({
  day,
  month,
  year,
  handleDayChange,
  handleMonthChange,
  handleYearChange,
}) => {
  const manageBirthdayField = [
    {
      feild: "Ngày",
      day: getDay,
      handleChange: handleDayChange,
    },
    {
      feild: "Tháng",
      day: getMonth,
      handleChange: handleMonthChange,
    },
    {
      feild: "Năm",
      day: getYear,
      handleChange: handleYearChange,
    },
  ]
  function getBirthDay() {
    return manageBirthdayField.map((birthday, index) => {
      return (
        <label className='mx-3 text-black ' key={index}>
          <select
            value={birthday.feild}
            className='text-black border hover:cursor-pointer outline-red-200  border-slate-300 rounded-md px-6 py-1'
            onChange={birthday.handleChange}
          >
            {birthday.day}
          </select>
        </label>
      )
    })
  }
  return (
    <div className='flex items-center py-2 ml-8'>
      <label className='text-sm'>Ngày Sinh</label>
      {getBirthDay()}
    </div>
  )
}

export default BirthdayField
