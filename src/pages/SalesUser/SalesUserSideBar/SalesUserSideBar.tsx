import { Link } from "react-router-dom"
import { RightWhiteIcon, barIcons } from "../../../images/centerIcons"
import { useMyContext } from "../../../context/context"
const ManageItemsLink = [
  {
    title: "Phụ kiện Nam & nữ",
    route: "/products",
  },
  {
    title: "Nhà sách Online",
    route: "/products",
  },
  {
    title: "Thể thao & du lịch",
    route: "/products",
  },
  {
    title: "Phụ kiện Nam & nữ",
    route: "/products",
  },
  {
    title: "Thiết bị gia dụng",
    route: "/products",
  },
  {
    title: "Đồ chơi",
    route: "/products",
  },
  {
    title: "Sức khoẻ",
    route: "/products",
  },
  {
    title: "Điện thoại & phụ kiện",
    route: "/products",
  },
]
const SalesUserSideBar = () => {
  const { langCode } = useMyContext()
  function getManageItemsLink() {
    return ManageItemsLink.map((item, index) => {
      return (
        <Link
          to={`/${langCode}${item.route}`}
          className={`${item.title === "Sản phẩm" ? "text-red-500" : ""} whitespace-nowrap px-3 py-2 flex items-center`}
          key={index}
        >
          <p className=' text-red-500 text-[9px] mt-0.1 px-2'>{RightWhiteIcon}</p>
          {item.title}
        </Link>
      )
    })
  }
  return (
    <div className='text-[13.5px] text-slate-800 px-4 mr-6'>
      <h2 className='text-black py-4 border-b border-slate-300 text-base flex items-center font-semibold'>
        <p className='pr-2 pt-1 text-[11px] font-normal '>{barIcons}</p> Danh mục
      </h2>
      {getManageItemsLink()}
    </div>
  )
}

export default SalesUserSideBar
