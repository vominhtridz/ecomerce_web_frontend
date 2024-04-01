import NavLinkPage from "../../NavLinkPage"

const Detail = () => {
  return (
    <section className='pl-4 text-[13.5px] font-normal  mb-4'>
      <h2 className='px-4 py-1.5 text-base font-semibold bg-slate-50 uppercase '>CHI TIẾT SẢN PHẨM</h2>
      <div className='flex items-center py-1.5'>
        <label className='w-[150px] mr-4 text-ellipsis overflow-hidden'>Danh mục</label>

        <NavLinkPage />
      </div>
      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>Xuất xứ</label>
        <p className='text-black pl-4'>Việt Nam</p>
      </div>
      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>
          Kiểu đóng gói
        </label>
        <p className='text-black pl-4'>Đơn</p>
      </div>
      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>Chất liệu</label>
        <p className='text-black pl-4'>Nhuộm</p>
      </div>
      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>
          Loại bảo hành
        </label>
        <p className='text-black pl-4'>Không bảo hành</p>
      </div>
      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>
          Trọng lượng được{" "}
        </label>
        <p className='text-black pl-4'>1kg</p>
      </div>
      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>
          Tên tổ chức chịu trách nhiệm
        </label>
        <p className='text-black pl-4'> nhiệm sản xuất Công Ty TNHH SX Thương Mại Việt Hưng</p>
      </div>
      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>
          Địa chỉ tổ chức chịu trách nhiệm sản xuất
        </label>
        <p className='text-black pl-4'> 683/1 A, KP. Tân An, P. Tân Đông Hiệp, , TX. Dĩ An,Bình Dương</p>
      </div>

      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>
          Số lượng hàng khuyến mãi{" "}
        </label>
        <p className='text-black pl-4'>85</p>
      </div>
      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>
          Số sản phẩm còn lại{" "}
        </label>
        <p className='text-black pl-4'>9972748</p>
      </div>
      <div className='flex items-center py-1.5'>
        <label className=' w-[150px] text-ellipsis text-slate-500 overflow-hidden whitespace-nowrap '>Gửi từ </label>
        <p className='text-black pl-4'>TP. Hồ Chí Minh</p>
      </div>
    </section>
  )
}

export default Detail
