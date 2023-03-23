import { Link } from "react-router-dom";
import "../Styles/nav.scss";
import Logo_img from "../Assets/Logo_img.svg";
import Menu_img from "../Assets/Menu_img.svg";
import LogoFondo_img from "../Assets/LogoFondo_img.png";
import Cerrar_img from "../Assets/Cerrar_img.svg";
import UbicacionVerde_img from "../Assets/UbicacionVerde_img.svg";
import FlechaNegra_img from "../Assets/FlechaNegra_img.svg";
import Usuario_img from "../Assets/Usuario_img.svg";
import Configuracion_img from "../Assets/Configuracion_img.svg";
import Pedidos_img from "../Assets/Pedidos_img.svg";
import Carera_img from "../Assets/Cartera_img.svg";
import UbicacionNegro_img from "../Assets/UbacionNegro_img.svg";
import Garantia_img from "../Assets/Garantia_img.svg";
import Referidos_img from "../Assets/Referidos_img.svg";
import Terminos_img from "../Assets/Terminos_img.svg";
import CerrarSesion_img from "../Assets/CerrarSesion_img.svg"

export default function Nav() {
  return(
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <img className="nav__logo-img" src={Logo_img} alt="Chipsi Logo" />
      </Link>    </nav>
  )
}


