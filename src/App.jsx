import { BrowserRouter,Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/ContentPage/Content.javascript'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import ContentCSS from "./Components/ContentPage/Content.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";




function App() {
 
  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [location]);

    return null;
        
  };


  return (
    // <body>
    // 
    //  <Home/>
     
    // <Footer/>
    // </body>
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/Javascript" element={<Content/>}/>
    <Route path="/CSS" element={<ContentCSS/>}/>
      <Route path="/" element={<Home/>}/>
   
     
     
    </Routes>
    <Footer/>
  </BrowserRouter>
 
  </>
  )
}

export default App
