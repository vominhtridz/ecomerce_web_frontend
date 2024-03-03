import { FC, ReactElement } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { RouteProps } from "react-router-dom"
interface PropDefaultLayOut {
  children: ReactElement<RouteProps>
}
const DefaultLayout: FC<PropDefaultLayOut> = ({ children }) => {
  return (
    <div className=''>
      <Header />
      <div className='body'>{children}</div>
      <Footer />
    </div>
  )
}
export default DefaultLayout
