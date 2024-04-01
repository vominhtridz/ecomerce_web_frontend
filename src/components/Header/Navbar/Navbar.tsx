import { NavBarClient } from "./NavbarClient"
import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "../../../images/centerIcons"
const NavBar = () => {
  const NavbarRef = useRef<HTMLDivElement | null>(null)

  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const handleDragLeft = () => {
    if (NavbarRef.current) {
      NavbarRef.current.scrollTo({
        left: scrollPosition - 100, // Điều chỉnh giá trị trượt đi khi click vào nút trái
        behavior: "smooth",
      })
      setScrollPosition(prev => (prev === 0 ? 0 : prev - 100))
    }
  }

  const handleDragRight = () => {
    if (NavbarRef.current) {
      NavbarRef.current.scrollTo({
        left: scrollPosition + 100, // Điều chỉnh giá trị trượt đi khi click vào nút trái
        behavior: "smooth",
      })
      setScrollPosition(prev => (prev === 500 ? 500 : prev + 100))
    }
  }
  return (
    <nav className={`  px-2 overflow-hidden  w-full relative user `}>
      <div
        ref={NavbarRef}
        className='max-lg:bg-white  flex items-center scrollbar-w-3 overflow-x-auto max-md:ml-6 list-none transition  duration-500  max-lg:text-sm '
      >
        {NavBarClient()}
        <button className='absolute lg:hidden top-0 p-2.5 right-0 text-xl bg-white' onClick={handleDragRight}>
          {ArrowRight}
        </button>
        <button className='absolute  lg:hidden top-0 p-2.5 left-0 text-xl bg-white ' onClick={handleDragLeft}>
          {ArrowLeft}
        </button>
      </div>
    </nav>
  )
}
export default NavBar
