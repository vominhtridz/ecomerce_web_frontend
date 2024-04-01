import AddBtn from "../../../../components/button/AddBtn"

const ManageStatus = [
  {
    title: "Đã sử dụng",
  },
  {
    title: "Mới",
  },
]

const Status = () => {
  function handleSearchStatus() {}
  const getManageStatus = () => {
    return ManageStatus.map((Status, index) => {
      return (
        <button className='flex py-1 items-center' key={index} onClick={handleSearchStatus}>
          <input type='checkbox' className='' />
          <p className='text-[13.5px] font-light px-2'>{Status.title}</p>
        </button>
      )
    })
  }
  return (
    <div className=''>
      <h2 className='text-base my-2 flex items-center'>Tình trạng</h2>
      {getManageStatus()}
      <AddBtn />
      <p className='border-b w-full my-4 border-slate-300'></p>
    </div>
  )
}
export default Status
