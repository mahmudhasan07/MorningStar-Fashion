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
import Adidas from './Components/Brands/Adidas.jsx';
import Gucci from './Components/Brands/Gucci.jsx';
import Zara from './Components/Brands/Zara.jsx';
import Calvin from './Components/Brands/Calvin.jsx';
import Hommes from './Components/Brands/Hommes.jsx';
import CardInfo from './Components/CardInfo/CardInfo.jsx';
import UpdateInfo from './Components/UpdateInfo/UpdateInfo.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App></App>,
    children :[
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : "/additems",
        element : <AddItem></AddItem>
      },
      {
        path : "/nike",
        element : <Nike></Nike>,
        loader : ()=> fetch('http://127.0.0.1:300/items/nike')
      },
      {
        path : "/adidas",
        element : <Adidas></Adidas>,
        loader : ()=> fetch('http://127.0.0.1:300/items/adidas')
      },
      {
        path : "/gucci",
        element : <Gucci></Gucci>,
        loader : ()=> fetch('http://127.0.0.1:300/items/gucci')
      },
      {
        path : "/zara",
        element : <Zara></Zara>,
        loader : ()=> fetch('http://127.0.0.1:300/items/zara')
      },
      {
        path : "/ck",
        element : <Calvin></Calvin>,
        loader : ()=> fetch('http://127.0.0.1:300/items/calvin-klein')
      },
      {
        path : "/h&m",
        element : <Hommes></Hommes>,
        loader : ()=> fetch('http://127.0.0.1:300/items/h&m')
      },
      {
        path : "/:name/:id",
        element : <CardInfo></CardInfo>,
        loader : ({params})=> fetch(`http://127.0.0.1:300/items/${params.name}/${params.id}`)
      },
      {
        path : "/:name/:id-update",
        element : <UpdateInfo></UpdateInfo>,
        loader : ({params})=> fetch(`http://127.0.0.1:300/items/${params.name}/${params.id}`)
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
