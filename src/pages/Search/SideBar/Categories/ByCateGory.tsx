import AddBtn from "../../../../components/button/AddBtn"

const ManageByCateGory = [
  {
    title: "Quần dài (91K+)",
  },
  {
    title: "Quần ngắn (91K+)",
  },
  {
    title: "Quần ống rộng (91K+)",
  },
  {
    title: "Quần ống dài (91K+)",
  },
  {
    title: "Quần sì tin (91K+)",
  },
]

const ByCateGory = () => {
  function handleSearchCateGory() {}
  const getManageByCateGory = () => {
    return ManageByCateGory.map((category, index) => {
      if (index > 3) return
      return (
        <button className='flex py-1 items-center' key={index} onClick={handleSearchCateGory}>
          <input type='checkbox' className='' />
          <p className='text-[13.5px] font-light px-2'>{category.title}</p>
        </button>
      )
    })
  }
  return (
    <div className='my-4'>
      <h2 className='text-[15px] mb-2  flex items-center'>Theo danh mục</h2>
      {getManageByCateGory()}
      {ManageByCateGory.length > 4 ? <AddBtn /> : ""}

      <p className='border-b w-full my-4 border-slate-300'></p>
    </div>
  )
}
export default ByCateGory
