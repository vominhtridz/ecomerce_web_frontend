import { FC } from "react"

const PromosionalCode: FC = () => {
  const handleCheckPromo = () => {}
  return (
    <div className='flex items-center'>
      <input
        type='text'
        placeholder='Promotional Code'
        className='text-base p-2 border italic outline-green-500 border-green-400'
      />
      <button onClick={handleCheckPromo} className='p-2 text-base  bg-green-500'>
        ADD
      </button>
    </div>
  )
}
export default PromosionalCode
