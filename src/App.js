import "./App.scss";
import "./Styles/var.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import RepararDispositivo from "./Pages/RepairDevice";
import Terminos from "./Pages/politicas/Terminos.js";
import Datos from "./Pages/politicas/Datos.js";
import Cookies from "./Pages/politicas/Cookies.js";
import Privacidad from "./Pages/politicas/Privacidad.js";
import Garantia from "./Pages/politicas/Garantia.js";
import PoliticaChipsiPuntos from "./Pages/politicas/PoliticaChipsiPuntos.js";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reparar" element={<RepararDispositivo />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/datos" element={<Datos />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/politica-chipsipuntos" element={<PoliticaChipsiPuntos />} />
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
