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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
