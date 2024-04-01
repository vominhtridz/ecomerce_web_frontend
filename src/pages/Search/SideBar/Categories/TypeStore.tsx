import AddBtn from "../../../../components/button/AddBtn"

const ManageTypeStore = [
  {
    title: "Livegood Mail",
  },
  {
    title: "Shop Yêu thích",
  },
  {
    title: "Xử lý hàng bởi livegood",
  },
  {
    title: "Shop yêu thích +",
  },
]

const TypeStore = () => {
  function handleSearchTypeStore() {}
  const getManageTypeStore = () => {
    return ManageTypeStore.map((TypeStore, index) => {
      return (
        <button className='flex py-1 items-center' key={index} onClick={handleSearchTypeStore}>
          <input type='checkbox' className='' />
          <p className='text-[13.5px] font-light px-2 whitespace-nowrap'>{TypeStore.title}</p>
        </button>
      )
    })
  }
  return (
    <div className=''>
      <h2 className='text-base my-2 flex items-center'>Kiểu Cửa hàng</h2>
      {getManageTypeStore()}
      <AddBtn />
      <p className='border-b w-full my-4 border-slate-300'></p>
    </div>
  )
}
export default TypeStore
