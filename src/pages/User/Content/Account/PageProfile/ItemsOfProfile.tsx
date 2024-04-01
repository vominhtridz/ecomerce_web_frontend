import { ChangeEvent, useState } from "react"
import AccountUserName from "./Input/AccountUserName"
import { useMyContext } from "../../../../../context/context"
import InputName from "./Input/InputName"
import AddPhoneNumber from "./button/AddPhoneNumber"
import PartSex from "./Input/Sex"
import SaveInfoBtn from "./button/SaveBtn"
import UserEmail from "./button/Email"
import BirthdayField from "./Input/BirthDay"
export const ItemsOfProfile = () => {
  const [accountUserName, setAccountUserName] = useState<string>("")
  const [inputName, setInputName] = useState<string>("")
  const { langCode } = useMyContext()
  const [gender, setGender] = useState<string>("") // State để lưu trữ giá trị giới tính được chọn
  const [day, setDay] = useState<string>("")
  const [month, setMonth] = useState<string>("")
  const [year, setYear] = useState<string>("")

  const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) => setDay(e.target.value)
  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => setMonth(e.target.value)
  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => setYear(e.target.value)
  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => setGender(e.target.value)
  const ChangeAccountUserName = (e: ChangeEvent<HTMLInputElement>) => setAccountUserName(e.target.value)
  const ChangeInputName = (e: ChangeEvent<HTMLInputElement>) => setInputName(e.target.value)
  return (
    <div className='py-6 px-16 text-sm  text-slate-500'>
      <AccountUserName ChangeAccountUserName={ChangeAccountUserName} accountUserName={accountUserName} />
      <p className='ml-28 text-[11.5px] pb-2 itlaic'>Tên Đăng Nhập chỉ được thay đổi 1 lần.</p>
      <InputName inputName={inputName} ChangeInputName={ChangeInputName} />
      <UserEmail />
      <AddPhoneNumber />
      <PartSex handleGenderChange={handleGenderChange} gender={gender} />
      <BirthdayField
        day={day}
        month={month}
        year={year}
        handleMonthChange={handleMonthChange}
        handleDayChange={handleDayChange}
        handleYearChange={handleYearChange}
      />
      <SaveInfoBtn />
    </div>
  )
}
export default ItemsOfProfile
