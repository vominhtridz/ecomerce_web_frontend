import PageProduct from "../../../components/button/PageProducts"
import Products from "./Products"
export function VisibleProducts() {
  return (
    <div className='w-full m-h-[100vh] '>
      <Products />
      <PageProduct />
    </div>
  )
}
