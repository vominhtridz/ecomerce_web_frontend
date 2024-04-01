import ImageItems from "./ImageItems"
import InforItems from "./InforItems/InforItems"

const MainInfoProduct = () => {
  return (
    <section className='rounded-sm flex shadow w-full bg-white text-slate-700 px-4 py-6'>
      <ImageItems />
      <InforItems />
    </section>
  )
}
export default MainInfoProduct
