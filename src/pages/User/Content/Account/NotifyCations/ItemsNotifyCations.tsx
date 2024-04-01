const manageItemsNotifyCations = [
  {
    title: "Email Thông báo",
    check: "Kích hoạt",
  },
  {
    title: "Cập nhật đơn hàng",
    content: "Thông báo khi có cập nhật về đơn hàng của tôi, bao gồm cả việc cập nhật thanh toán.",
    check: "Kích hoạt",
  },
  {
    title: "Cập nhật sản phẩm",
    content: "Thông báo khi sản phẩm của tôi hết hàng, bị xóa hoặc bị khóa.",

    check: "Kích hoạt",
  },
  {
    title: "Bản tin",
    content: "Gửi tôi thông tin xu hướng, chương trình khuyến mãi & cập nhật mới nhất.",
    check: "Kích hoạt",
  },

  {
    title: "Nội dung cá nhân",
    content: " Gửi tôi cập nhật cá nhân (ví dụ: quà sinh nhật)",
    check: "Kích hoạt",
  },
]
const ItemsNotifyCations = () => {
  const getItemsNotifyCations = () => {
    return manageItemsNotifyCations.map((notifycation, index) => {
      return (
        <div className='flex items-center justify-between ' key={index}>
          <nav className='text-black text-[17px]'>
            {notifycation?.title}
            <p className='text-sm text-slate-500'>{notifycation?.content}</p>
          </nav>
          <nav className='flex items-center my-[1.2rem]'>
            <input type='checkbox' className='text-white bg-red-500 mx-2 p-2 w-[20px] h-[20px]' />
            <p className='text-[15.5px]'>{notifycation?.check}</p>
          </nav>
        </div>
      )
    })
  }
  return <div className=''>{getItemsNotifyCations()}</div>
}
export default ItemsNotifyCations
