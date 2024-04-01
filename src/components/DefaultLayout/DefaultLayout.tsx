import { FC, ReactElement } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { RouteProps } from "react-router-dom"
import { useMyContext } from "../../context/context"
import ChatBox from "../ChatBox/ChatBox"
interface PropDefaultLayOut {
  children: ReactElement<RouteProps>
}
const DefaultLayout: FC<PropDefaultLayOut> = ({ children }) => {
  const { language } = useMyContext()
  return (
    <div className='bg-[rgba(0,0,0,0.03)] '>
      {language && <Header />}
      <div className='body max-lg:mt-[260px]   max-md:mt-[180px] lg:mt-[125px]'>{children}</div>
      {language && <Footer />}
      <ChatBox />
    </div>
  )
}
export default DefaultLayout
