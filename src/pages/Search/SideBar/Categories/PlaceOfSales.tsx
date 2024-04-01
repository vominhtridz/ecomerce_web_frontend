import AddBtn from "../../../../components/button/AddBtn"

const ManagePlaceOfSales = [
  {
    title: "An Giang",
  },
  {
    title: "Bà rịa Vũng Tàu",
  },
  {
    title: "Bạc Liêu",
  },
  {
    title: "Bắc Giang",
  },
  {
    title: "Bắc cạn",
  },
  {
    title: "Bắc Ninh",
  },
  {
    title: "Bến Tre",
  },
  {
    title: "Bình Dương",
  },
  {
    title: "Bình Định",
  },
  {
    title: "Bình Phước",
  },
  {
    title: "Bình Thuận",
  },
  {
    title: "Cà Mau",
  },

  {
    title: "Cao Bằng",
  },
  {
    title: "Cần Thơ",
  },
  {
    title: "Đà Nẵng",
  },
  {
    title: "Đắk Lắk",
  },
  {
    title: "Đắk Nông",
  },
  {
    title: "Điện Biên",
  },
  {
    title: "Đồng Nai",
  },

  {
    title: "Đồng Tháp",
  },
  {
    title: "Gia Lai",
  },
  {
    title: "Hà Giang",
  },
  {
    title: "Hà Nam",
  },
  {
    title: "Hà Nội",
  },
  {
    title: "Hà Tĩnh",
  },
  {
    title: "Hải Dương",
  },
]
const PlaceOfSales = () => {
  function handleSearchPlace() {}
  const getManagePlaceOfSales = () => {
    return ManagePlaceOfSales.map((Place, index) => {
      if (index > 3) return
      return (
        <button className='flex py-1 items-center' key={index} onClick={handleSearchPlace}>
          <input type='checkbox' className='' />
          <p className='text-[13.5px] font-light px-2'>{Place.title}</p>
        </button>
      )
    })
  }
  return (
    <div className=''>
      <h2 className='text-base mb-2 flex items-center'>Nơi bán</h2>
      {getManagePlaceOfSales()}
      {ManagePlaceOfSales.length > 4 ? <AddBtn /> : ""}

      <p className='border-b w-full my-4 border-slate-300'></p>
    </div>
  )
}
export default PlaceOfSales
