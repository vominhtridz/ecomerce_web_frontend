import AddBtn from "../../../../components/button/AddBtn"

const ManageBrandOfSales = [
  {
    title: "MIAA",
  },
  {
    title: "AVOCADO",
  },
  {
    title: "EOENKKI",
  },
]
const Brand = () => {
  function handleSearchBrand() {}
  const getManageBrandOfSales = () => {
    return ManageBrandOfSales.map((Brand, index) => {
      return (
        <button className='flex py-1 items-center' key={index} onClick={handleSearchBrand}>
          <input type='checkbox' className='' />
          <p className='text-[13.5px] font-light px-2'>{Brand.title}</p>
        </button>
      )
    })
  }
  return (
    <div className=''>
      <h2 className='text-base mb-2 flex items-center'>Thương hiệu</h2>
      {getManageBrandOfSales()}
      <AddBtn />
      <p className='border-b w-full my-4 border-slate-300'></p>
    </div>
  )
}
export default Brand
