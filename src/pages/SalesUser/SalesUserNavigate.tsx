import { useState } from "react"
import { useMyContext } from "../../context/context"
import { DownWhiteIcon } from "../../images/centerIcons"

const ManageSalesUserNavigate = [
  {
    title: "Trang chủ",
  },
  {
    title: "Tất cả sản phẩm",
  },
  {
    title: "nhà cửa đời sống",
  },
  {
    title: "Giặt giũ & chăm xóc nhà cửa",
  },
  {
    title: "Mẹ bé",
  },
  {
    title: "Chăm xóc sắc đẹp",
  },
  {
    title: "Thêm",
    Additems: [
      "Phụ kiện Nam & nữ",
      "Nhà sách Online",
      "Thể thao & du lịch",
      "Thiết bị gia dụng",
      "Đồ chơi",
      "Sức khoẻ",
      "Điện thoại & phụ kiện",
    ],
  },
]
const SalesUserNavigate = () => {
  const { langCode } = useMyContext()
  const [visible, setVisible] = useState<boolean>(false)
  function handleNavipage(e) {}
  function getManageSalesUserNavigate() {
    // chưa xong phầm 'thêm'
    return ManageSalesUserNavigate.map((SalesUserLink, index) => {
      return (
        <button
          className={`${SalesUserLink.title === "Trang chủ" ? "border-b-2 border-green-500 text-green-500 " : "text-slate-700"} px-7 hover:text-green-500 py-2  text-base relative`}
          key={index}
          onClick={handleNavipage}
        >
          {SalesUserLink.title === "Thêm" ? (
            <div className='flex items-center '>
              {SalesUserLink.title} <p className='px-1 text-[11px] pt-0.5'>{DownWhiteIcon}</p>
              {/* <div className='absolute top-full right-0 w-full    bg-white shadow overflow-y-auto h-[20rem]'>
                <p className='px-4 py-1 '>{SalesUserLink.Additems}</p>
              </div> */}
            </div>
          ) : (
            SalesUserLink.title
          )}
        </button>
      )
    })
  }
  return <nav className=' mt-4'>{getManageSalesUserNavigate()}</nav>
}

export default SalesUserNavigate
