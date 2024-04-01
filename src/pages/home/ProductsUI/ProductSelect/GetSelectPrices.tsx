import { useMyContext } from "../../../../context/context"

interface SelectPricesTypes {
  title?: string
  route?: string
}

export function getSelectPrices() {
  const { language } = useMyContext()
  return language?.center.products.SelectPrices.map(
    (item: SelectPricesTypes, index: number) => {
      return (
        <button
          key={index}
          className='px-4 py-2 text-sm text-slate-400 whitespace-nowrap  '
        >
          {item.title}
        </button>
      )
    },
  )
}
