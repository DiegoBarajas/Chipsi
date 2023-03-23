import "./App.scss";
import "./Styles/var.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import RepararDispositivo from "./Pages/RepairDevice";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/reparar" element={<RepararDispositivo />} />
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
