import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/NavBar"
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "./Components/Theme/Theme";
import { useState } from "react";


function App() {
  const [theme,settheme] = useState('light')

  const toggletheme = ()=>{
    console.log("theme Change");
    if(theme==="light"){
      settheme('dark')
    }
    else{
      settheme("light")
    }
  }

  return (
    <>
    <ThemeProvider theme={theme=== "light"?  lightTheme : darkTheme}>
      <NavBar handletheme={toggletheme}></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
