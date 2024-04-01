import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./routes/routes"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import { MyProvider } from "./context/context"
import DefaultLayout from "./components/Defaultlayout/Defaultlayout"

const App: FC = () => {
  return (
    <div className='relative'>
      <MyProvider>
        <DefaultLayout>
          <Routes>
            {PublicRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </DefaultLayout>
      </MyProvider>
    </div>
  )
}

export default App
