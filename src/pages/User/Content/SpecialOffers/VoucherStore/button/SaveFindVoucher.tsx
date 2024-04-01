import { FC } from "react"

interface SaveFindVoucherTypes {
  visibleBtn: boolean
}

const SaveFindVoucher: FC<SaveFindVoucherTypes> = ({ visibleBtn }) => {
  const handleSaves = () => {
    if (!visibleBtn) return
  }
  return (
    <button
      className={` text-[12.8px] py-2.5 mx-4 rounded-sm px-8   ${visibleBtn ? "bg-red-500 cursor-pointer text-white" : "cursor-default bg-slate-300 text-slate-50"}`}
      onClick={handleSaves}
    >
      Lưu
    </button>
  )
}
export default SaveFindVoucher
