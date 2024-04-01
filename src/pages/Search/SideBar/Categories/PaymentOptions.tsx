import AddBtn from "../../../../components/button/AddBtn"

const ManagePaymentOptions = [
  {
    title: "0% trả góp",
  },
]

const PaymentOptions = () => {
  function handleSearchPaymentOptions() {}
  const getManagePaymentOptions = () => {
    return ManagePaymentOptions.map((PaymentOptions, index) => {
      return (
        <button className='flex py-1 items-center' key={index} onClick={handleSearchPaymentOptions}>
          <input type='checkbox' className='' />
          <p className='text-[13.5px] font-light px-2'>{PaymentOptions.title}</p>
        </button>
      )
    })
  }
  return (
    <div className=''>
      <h2 className='text-base flex my-2 items-center'>Theo danh mục</h2>
      {getManagePaymentOptions()}
      <AddBtn />
      <p className='border-b w-full my-4 border-slate-300'></p>
    </div>
  )
}
export default PaymentOptions
