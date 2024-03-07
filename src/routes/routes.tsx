import { ReactElement } from "react"
import Home from "../pages/home/Home"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
interface PublicRoutes {
  component: ReactElement
  path: string
}
const path = window.location.pathname
const PublicRoutes: PublicRoutes[] = [
  {
    component: <Home />,
    path: `${path}`,
  },
  {
    component: <Home />,
    path: `/`,
  },
  {
    component: <PageNotFound />,
    path: "*",
  },
]

const PrivateRoutes = [{}]

export { PublicRoutes, PrivateRoutes }
