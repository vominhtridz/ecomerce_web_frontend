import { NoSlashLeft, NoSlashRight } from "../../../images/centerIcons"

const BackAndNextBtn = () => {
  const handleFindProductRelated = () => {}
  return (
    <div className='flex items-center'>
      <button
        onClick={handleFindProductRelated}
        className='p-2.5 text-sm flex items-center justify-center hover:bg-white  border border-slate-300'
      >
        {NoSlashLeft}
      </button>
      <button
        onClick={handleFindProductRelated}
        className='p-2.5 text-[14.7px] flex items-center justify-center hover:bg-white  border border-slate-300'
      >
        {NoSlashRight}
      </button>
    </div>
  )
}
export default BackAndNextBtn
