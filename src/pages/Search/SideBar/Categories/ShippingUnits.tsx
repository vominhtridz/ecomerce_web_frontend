import AddBtn from "../../../../components/button/AddBtn"

const ManageShippingUnitsOfSales = [
  {
    title: "Hoả tốc",
  },
  {
    title: "Nhanh",
  },
  {
    title: "Tiết kiệm",
  },
]
const ShippingUnits = () => {
  function handleSearchShippingUnits() {}
  const getManageShippingUnitsOfSales = () => {
    return ManageShippingUnitsOfSales.map((ShippingUnits, index) => {
      return (
        <button className='flex py-1 items-center' key={index} onClick={handleSearchShippingUnits}>
          <input type='checkbox' className='' />
          <p className='text-[13.5px] font-light px-2'>{ShippingUnits.title}</p>
        </button>
      )
    })
  }
  return (
    <div className=''>
      <h2 className='text-base mb-2 flex items-center'>Đơn vị vận chuyển</h2>
      {getManageShippingUnitsOfSales()}
      <AddBtn />
      <p className='border-b w-full my-4 border-slate-300'></p>
    </div>
  )
}
export default ShippingUnits
