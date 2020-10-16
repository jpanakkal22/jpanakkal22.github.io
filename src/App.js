import React from "react";
import Wrapper from "./components/Wrapper";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About/About";


function App() {
  return (
   <div>    
  
    <Navbar/>    
    <Wrapper>
    
    <About/>  
    </Wrapper>
    
    <Footer />  
   </div>     
  );
}

export default App;

