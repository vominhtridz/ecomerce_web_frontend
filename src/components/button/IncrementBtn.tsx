import { IncementType } from "../../typescript/ProductInforType"

const IncrementBtn = ({ handleIncrement }: IncementType) => {
  return (
    <button
      onClick={handleIncrement}
      className=' px-2.5 text-xl text-slate-600 flex items-center rounded-sm border border-slate-300'
    >
      +
    </button>
  )
}
export default IncrementBtn
