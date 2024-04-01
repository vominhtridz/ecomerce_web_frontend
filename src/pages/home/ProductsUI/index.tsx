import { useLocation } from "react-router-dom"
import { useMyContext } from "../../../context/context"
interface GetProductsTypes {
  title?: string
  route?: string
}
export function getPrices() {
  const path = useLocation().pathname
  const { language } = useMyContext()
  function handleNavigatePrices() {}
  return language?.center.products.views.map((item: GetProductsTypes, index: number) => {
    return (
      <option
        key={index}
        value={item.route}
        className='cursor-pointer whitespace-nowrap max-md:text-[11px]'
        selected={path === item.route}
        onClick={handleNavigatePrices}
      >
        {item.title}
      </option>
    )
  })
}
