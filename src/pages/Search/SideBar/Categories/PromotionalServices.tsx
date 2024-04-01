import AddBtn from "../../../../components/button/AddBtn"

const ManagePromotionalServices = [
  {
    title: "Voucher Xtra",
  },
  {
    title: "Đang giảm giá",
  },
  {
    title: "Gì cũng rẻ ",
  },
  {
    title: "Hàng có sẵn",
  },
  {
    title: "Mua giá buôn bán sỉ",
  },
]
const PromotionalServices = () => {
  function handleSearchPromotionalServices() {}

  const getManagePromotionalServices = () => {
    return ManagePromotionalServices.map((PromotionalServices, index) => {
      return (
        <button className='flex py-1 items-center' key={index} onClick={handleSearchPromotionalServices}>
          <input type='checkbox' className='' />
          <p className='text-[13.5px] font-light px-2'>{PromotionalServices.title}</p>
        </button>
      )
    })
  }
  return (
    <div className=''>
      <h2 className='text-base my-2 flex items-center'>Dịch Vụ & Khuyến Mãi</h2>
      {getManagePromotionalServices()}
      <AddBtn />
      <p className='border-b w-full my-4 border-slate-300'></p>
    </div>
  )
}
export default PromotionalServices
