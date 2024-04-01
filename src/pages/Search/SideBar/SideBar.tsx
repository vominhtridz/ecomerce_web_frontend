import RemoveAllBtn from "../../../components/button/RemoveAllBtn"
import { useMyContext } from "../../../context/context"
import { FilterIcon } from "../../../images/centerIcons"
import Brand from "./Categories/Brand"
import ByCateGory from "./Categories/ByCateGory"
import Evoluate from "./Categories/Evoluate"
import PaymentOptions from "./Categories/PaymentOptions"
import PlaceOfSales from "./Categories/PlaceOfSales"
import PriceRange from "./Categories/PriceRange"
import PromotionalServices from "./Categories/PromotionalServices"
import ShippingUnits from "./Categories/ShippingUnits"
import Status from "./Categories/Status"
import TypeStore from "./Categories/TypeStore"

const SideBar = () => {
  const { langCode } = useMyContext()

  return (
    <section className='px-10 py-2 lg:w-[290px]'>
      <h2 className='text-[16px] font-bold flex items-center text-slate-600'>
        <p className='pr-2 text-lg'>{FilterIcon}</p> BỘ LỌC TÌM KIẾM
      </h2>
      <ByCateGory />
      <PlaceOfSales />
      <ShippingUnits />
      <Brand />
      <PriceRange />
      <TypeStore />
      <Status />
      <PaymentOptions />
      <Evoluate />
      <PromotionalServices />
      <RemoveAllBtn />
    </section>
  )
}
export default SideBar
