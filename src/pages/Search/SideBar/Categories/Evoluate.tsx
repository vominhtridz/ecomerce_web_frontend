import { getFiveStar, getFourStar, getOneStar, getThreeStar, getTwoStar } from "."

const ManageEvoluate = [
  {
    Star: getFiveStar,
  },
  {
    Star: getFourStar,
    title: "Trở lên",
  },
  {
    Star: getThreeStar,
    title: "Trở lên",
  },
  {
    Star: getTwoStar,
    title: "Trở lên",
  },
  {
    Star: getOneStar,
    title: "Trở lên",
  },
]
const Evoluate = () => {
  function handleSearchEvoluate() {}
  const getManageEvoluate = () => {
    return ManageEvoluate.map((Evoluate, index) => {
      return (
        <button
          className='flex text-[19px] pb-1 text-yellow-500  items-center pl-2'
          key={index}
          onClick={handleSearchEvoluate}
        >
          {Evoluate.Star}
          <p className='px-2 text-sm text-black'>{Evoluate.title}</p>
        </button>
      )
    })
  }
  return (
    <div className=''>
      <h2 className='text-base flex my-2 items-center'>Đánh giá</h2>
      {getManageEvoluate()}
      <p className='border-b w-full my-4 border-slate-300'></p>
    </div>
  )
}
export default Evoluate
