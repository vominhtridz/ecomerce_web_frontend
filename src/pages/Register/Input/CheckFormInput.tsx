import { FC } from "react"

interface CheckFormInputTypes {
  emailError: boolean
  pwdError: boolean
  conFirmPwdError: boolean
  AccountAvailable: boolean
}

const CheckFormInput: FC<CheckFormInputTypes> = ({
  emailError,
  pwdError,
  conFirmPwdError,
  AccountAvailable,
}) => {
  return (
    <p className='flex justify-center flex-col items-center my-6 pt-4 text-red-500'>
      {emailError && (
        <span className='block'>
          Email: obligatory have @gmail.com example jest@gmail.com.
        </span>
      )}
      {pwdError && (
        <span className='block'>
          Password: must contain at least one letter and one number, and be at least 6
          characters long.
        </span>
      )}
      {conFirmPwdError && (
        <span className='block'>password: does not match with confirm Password. </span>
      )}
      {AccountAvailable && <span className='block'>Email: was Available in System</span>}
    </p>
  )
}
export default CheckFormInput
