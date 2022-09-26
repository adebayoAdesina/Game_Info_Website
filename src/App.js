import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Globalstyles from "./Styled/globalStyles";

function App() {
  
  return (
    <div className="App">
      <Globalstyles/>
      <Routes>

      <Route path={"/"} element={<Home/>}/>
      <Route path={"/game/:id"} element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
