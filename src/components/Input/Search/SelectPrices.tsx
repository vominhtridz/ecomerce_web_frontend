const managePrices = [
  {
    title: "từ thấp đến cao",
  },
  {
    title: "từ cao xuống Thấp",
  },
]
const SelectPrices = () => {
  const getmanagePrices = () => {
    return managePrices.map((prices, index) => {
      return (
        <option key={index} value={prices.title} className='px-4 '>
          Giá: {prices.title}
        </option>
      )
    })
  }
  return <select className='py-2 px-2  outline-none cursor-pointer text-[13px]'>{getmanagePrices()}</select>
}
export default SelectPrices
