import { FC } from "react"

interface CheckFormInputTypes {
  emailError: boolean
  Incorect: boolean
}

const CheckFormInput: FC<CheckFormInputTypes> = ({ emailError, Incorect }) => {
  return (
    <p className='flex justify-center my-6 pt-4 text-red-500'>
      {emailError && (
        <span className='block'>
          Email obligatory have @gmail.com example jest@gmail.com.
        </span>
      )}
      {Incorect && <span className='block'>Email Or PassWord is incorect Incorect.</span>}
    </p>
  )
}
export default CheckFormInput
