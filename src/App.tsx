import { Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./routes/routes"
import DefaultLayout from "./components/DefaultLayout/DefaultLayout"
import { FC } from "react"
import { MyProvider } from "./context/context"

const App: FC = () => {
  return (
    <div className=''>
      <MyProvider>
        <DefaultLayout>
          <Routes>
            {PublicRoutes.map((route: PublicRoutes, index: number) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </DefaultLayout>
      </MyProvider>
    </div>
  )
}
export default App
