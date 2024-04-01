import SelectPrices from "../../../../components/Input/Search/SelectPrices"
import BackAndNextBtn from "../../../../components/button/Search/BackAndNextBtn"
import LatestProductsBtn from "../../../../components/button/Search/LatestProductsBtn"
import RelateToBtn from "../../../../components/button/Search/RelateToBtn"
import SellingestBtn from "../../../../components/button/Search/SellingestBtn"

const ListArrangeProducts = () => {
  return (
    <nav className=' my-2 px-4 text-sm bg-[rgba(0,0,0,0.04)] w-full rounded-sm flex items-center py-2'>
      <h6 className='text-sm text-black'>Sắp xếp theo</h6>
      <RelateToBtn />
      <LatestProductsBtn />
      <SellingestBtn />
      <SelectPrices />
      <div className='flex items-center ml-auto'>
        <p className='flex items-center px-6'>
          <span className='text-red-500'>3</span>/17
        </p>
        <BackAndNextBtn />
      </div>
    </nav>
  )
}
export default ListArrangeProducts
