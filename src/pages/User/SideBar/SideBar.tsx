import { useMyContext } from "../../../context/context"
import AccountOfMine from "./AccountOfMine/AccountOfMine"

import EditAccount from "./EditAccount"
import Notifycations from "./Notifycations/Notifycations"
import PerchaseOrders from "./PerchaseOrders/PerchaseOrders"
import SpecialOffers from "./SpecialOffers/SpecialOffers"

const SideBar = () => {
  const { langCode } = useMyContext()
  return (
    <section className='px-10 py-2 lg:w-[290px]'>
      <EditAccount />
      <div className='border-t border-slate-200 pt-8'>
        <SpecialOffers />
        <AccountOfMine />
        <PerchaseOrders />
        <Notifycations />
      </div>
    </section>
  )
}
export default SideBar
