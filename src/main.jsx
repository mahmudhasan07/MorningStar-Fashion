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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/additems",
        element: <AddItem></AddItem>
      },
      {
        path: "/:brand",
        element: <Nike></Nike>,
        loader: ({ params }) => fetch(`https://morningstar-fashion-server-7p4yd35qw.vercel.app/items/${params.brand}`)
      },
      {
        path: "/mycarts",
        element: <AddCart></AddCart>,
        loader: () => fetch('https://morningstar-fashion-server-7p4yd35qw.vercel.app/mycarts')
      },
      {
        path: "/:name/:id",
        element: <CardInfo></CardInfo>,
        loader: ({ params }) => fetch(`https://morningstar-fashion-server-7p4yd35qw.vercel.app/items/${params.name}/${params.id}`)
      },
      {
        path: "/:name/:id-update",
        element: <UpdateInfo></UpdateInfo>,
        loader: ({ params }) => fetch(`https://morningstar-fashion-server-7p4yd35qw.vercel.app/items/${params.name}/${params.id}`)
      },

    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path : "/registration",
    element : <Registration></Registration>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
