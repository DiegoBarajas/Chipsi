import FlechotaNegra_img from "../Assets/FlechotaNegra_img.svg";
import UbicacionVerde_img from "../Assets/UbicacionVerde_img.svg";
import FlechaNegra_img from "../Assets/FlechaNegra_img.svg";
import { Link } from "react-router-dom";
import "../Styles/repair__device__found.scss";

export default function NavMini(props) {
    return(
        <nav className="repair__device__found__nav">
                <Link to={props.link} className="repair__device__found__nav-arrow">
                    <img className="repair__device__found__nav-arrow-img" src={FlechotaNegra_img} alt="volver" />
                </Link>
                <Link to="/direcciones" className="repair__device__found__nav-location">
                    <img className="repair__device__found__nav-location-img" src={UbicacionVerde_img} alt="Ubicacion" />
                    <span className="repair__device__found__nav-location-span">
                        {props.home}
                    </span>
                    <img className="repair__device__found__nav-location-button" src={FlechaNegra_img} alt="ir" />
                </Link>
            </nav>
    )
}