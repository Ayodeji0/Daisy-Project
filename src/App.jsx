/* eslint-disable no-unused-vars */
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {
  AboutUs,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  SingleProduct,
  Register,
} from "./pages";
import { ErrorElements } from "./components";

//  loaders
import {loader as landingloader} from './pages/Landing'
// actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element: <Landing/>,
        errorElement: <ErrorElements/>,
        loader:landingloader,
      },
      {
        path:'/products',
        element: <Products/>
      },
      {
        path:'/products/:id',
        element: <SingleProduct/>
      },
      {
        path:'/cart',
        element: <Cart/>
      },
      {
        path:'/aboutus',
        element: <AboutUs/>
      },
      {
        path:'/checkout',
        element: <Checkout/>
      },
      {
        path:'/orders',
        element: <Orders/>
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path: '/register',
    element: <Register/>,
    errorElement: <Error/>
  },

])


const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App


