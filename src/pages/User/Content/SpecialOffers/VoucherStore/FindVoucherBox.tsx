import { ChangeEvent, useState } from "react"
import { useMyContext } from "../../../../../context/context"
import { RemoveIcon } from "../../../../../images/centerIcons"
import SaveFindVoucher from "./button/SaveFindVoucher"
import FindVoucherInput from "./input/FindVoucherInput"

const FindVoucherBox = () => {
  const { langCode } = useMyContext()
  const [visible, setVisible] = useState<boolean>(false)
  const [visibleBtn, setVisibleBtn] = useState<boolean>(false)
  const [voucherInput, setVoucherInput] = useState<string>("")
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (voucherInput === "") {
      setVisible(false)
    }
    setVisibleBtn(true)
    setVoucherInput(e.target.value)
    setVisible(true)
  }
  const handleRemoveText = () => {
    setVoucherInput("")
    setVisible(false)
    setVisibleBtn(false)
  }
  const handleKeyPress = () => {
    if (voucherInput) return
    else if (voucherInput === "") {
      setVisible(false)
      setVisibleBtn(false)
    }
  }
  return (
    <div className=' py-6 flex items-center  my-4 justify-center'>
      <p className='px-4'>Mã Voucher</p>
      <div className='relative'>
        <FindVoucherInput handleChange={handleChange} voucherInput={voucherInput} handleKeyPress={handleKeyPress} />
        {visible && (
          <button className='text-[19px] absolute right-3 top-2 p-1 text-slate-400' onClick={handleRemoveText}>
            {RemoveIcon}
          </button>
        )}
      </div>
      <SaveFindVoucher visibleBtn={visibleBtn} />
    </div>
  )
}
export default FindVoucherBox
