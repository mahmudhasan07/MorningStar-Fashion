import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/NavBar"
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "./Components/Theme/Theme";
import { useState } from "react";
import { GlobalStyles } from "./Components/Theme/Global";


function App() {
  const [theme, settheme] = useState('white')
  const [textclr, settextclr] = useState('black')

  const darktheme = () => {
    // console.log("theme Change");
    settheme("black")
    settextclr("whitesmoke")
    
  }

  const lighttheme =()=>{
    settheme("white")
    settextclr("black")
  }

  console.log(theme);



  return (

      <section>
        {/* <button  className="btn">Hello</button> */}
        <div style={{backgroundColor : `${theme}`, color : `${textclr}`}}>
        <NavBar theme={theme} handlelight={lighttheme} handledark={darktheme}></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>

        </div>
      </section>
  )
}

export default App
