import { DecrementType } from "../../typescript/ProductInforType"

const DecrementBtn = ({ handleDecement }: DecrementType) => {
  return (
    <button
      onClick={handleDecement}
      className='px-2.5 text-xl text-slate-600 flex items-center rounded-sm border border-slate-300'
    >
      -
    </button>
  )
}
export default DecrementBtn
