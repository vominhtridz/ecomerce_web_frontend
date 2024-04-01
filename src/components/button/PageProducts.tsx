import { DoubleLeft, DoubleRight, NoSlashLeft, NoSlashRight } from "../../images/centerIcons"

function PageProduct() {
  return (
    <nav className='flex items-center mt-4 justify-center'>
      <button className='rounded-full border border-solid ml-1 border-slate-400 p-2 text-base '>{DoubleLeft}</button>
      <button className='rounded-full border border-solid ml-1 border-slate-400 p-2 text-base '>{NoSlashLeft}</button>
      <button className='rounded-full border border-solid ml-1 border-slate-400 w-[34px] h-[34px] text-base '>1</button>

      <button className='rounded-full border border-solid ml-1 border-slate-400 p-2 text-base '>{NoSlashRight}</button>
      <button className='rounded-full border border-solid ml-1 border-slate-400 p-2 text-base '>{DoubleRight}</button>
    </nav>
  )
}
export default PageProduct
