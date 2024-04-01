import { ReactElement } from "react"
import PageCart from "../pages/cart/Cart"
import Home from "../pages/home/Home"
import PageLogin from "../pages/Login/Login"
import PageRegister from "../pages/Register/Register"
import PageUsers from "../pages/User/PageUser"
import PageSearch from "../pages/Search/Search"
import PageInformationProduct from "../pages/InformationProduct/InformationProduct"
import SalesUser from "../pages/SalesUser/SalesUser"

interface PublicRoutes {
  component: ReactElement
  path: string
}

const PublicRoutes: PublicRoutes[] = [
  {
    component: <PageCart />,
    path: "/:lang/cart",
  },
  {
    component: <PageLogin />,
    path: "/:lang/login",
  },
  {
    component: <PageRegister />,
    path: "/:lang/register",
  },
  {
    component: <PageSearch />,
    path: "/:lang/search",
  },
  {
    component: <SalesUser />,
    path: "/:lang/:salesUser",
  },
  {
    component: <PageInformationProduct />,
    path: "/:lang/info",
  },
  {
    component: <PageUsers />,
    path: "/:lang/user/account/profile",
  },
  {
    component: <PageUsers />,
    path: "/:lang/user/notifications/order",
  },

  {
    component: <Home />,
    path: "/:lang",
  },
  {
    component: <Home />,
    path: "/",
  },
]


const PrivateRoutes = [{}]

export { PublicRoutes, PrivateRoutes }
