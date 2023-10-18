import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/NavBar"


function App() {


  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
