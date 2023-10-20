import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AddItem from './Components/AddItem/AddItem.jsx';
import Nike from './Components/Brands/Nike.jsx';
import CardInfo from './Components/CardInfo/CardInfo.jsx';
import UpdateInfo from './Components/UpdateInfo/UpdateInfo.jsx';
import AddCart from './Components/AddCart/AddCart.jsx';
import Login from './Components/User/Login.jsx';
import Registration from './Components/User/Registration.jsx';
import ContextAPI from './Components/ContextAPI/ContextAPI.jsx';
import PrivetRouter from './Components/Router/PrivetRouter.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AllItem from './Components/Brands/AllItem.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/additems",
        element: <PrivetRouter><AddItem></AddItem></PrivetRouter> 
      },
      {
        path : '/all-items',
        element : <AllItem></AllItem>,
        loader : ()=> fetch('https://morningstar-fashion-server.vercel.app/items')
      },
      {
        path: "/:brand",
        element: <Nike></Nike>,
        loader: ({ params }) => fetch(`https://morningstar-fashion-server.vercel.app/items/${params.brand}`)
      },
      {
        path: "/mycarts",
        element: <PrivetRouter> <AddCart></AddCart> </PrivetRouter>,
        loader: () => fetch('https://morningstar-fashion-server.vercel.app/mycarts')
      },
      {
        path: "/:name/:id",
        element: <PrivetRouter> <CardInfo></CardInfo> </PrivetRouter>,
        loader: ({ params }) => fetch(`https://morningstar-fashion-server.vercel.app/items/${params.name}/${params.id}`)
      },
      {
        path: "/:name/:id-update",
        element: <PrivetRouter><UpdateInfo></UpdateInfo></PrivetRouter>,
        loader: ({ params }) => fetch(`https://morningstar-fashion-server.vercel.app/items/${params.name}/${params.id}`)
      },
      {
        path: "/contact-us",
        element: <ErrorPage></ErrorPage>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ContextAPI>
      <RouterProvider router={router}></RouterProvider>
    </ContextAPI>
  </React.StrictMode>,
)
