import AddressItems from "./AddressItems"
import ManagerAddress from "./ManagerAddress"

const ShowAdress = () => {
  return (
    <div className='p-4'>
      {/* <p className='py-20 flex item-center justify-center'>Chưa có Địa chỉ nào</p> */}
      <h2 className='text-xl py-4'>Địa chỉ</h2>
      <section className='flex justify-between'>
        <AddressItems />
        <ManagerAddress />
      </section>
    </div>
  )
}
export default ShowAdress
