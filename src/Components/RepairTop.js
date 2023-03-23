import { Link } from "react-router-dom"
import FlechotaNegra_img from "../Assets/FlechotaNegra_img.svg";
import UbicacionVerde_img from "../Assets/UbicacionVerde_img.svg";
import FlechaNegra_img from "../Assets/FlechaNegra_img.svg";
import "../Styles/repair__top.scss";

export default function RepairTop(props) {
    return (
        <>
            <nav className="repair__device__nav">
                <Link to={props.link} className="repair__device__nav-arrow">
                    <img className="repair__device__nav-arrow-img" src={FlechotaNegra_img} alt="volver" />
                </Link>
                <Link to="/direcciones" className="repair__device__nav-location">
                    <img className="repair__device__nav-location-img" src={UbicacionVerde_img} alt="Ubicacion" />
                    <span className="repair__device__nav-location-span">
                        {props.home}
                    </span>
                    <img className="repair__device__nav-location-button" src={FlechaNegra_img} alt="ir" />
                </Link>
            </nav>
            <div className="repair__device__tittle">
                <h2 className="repair__device__tittle-h3">{props.tittle}</h2>
                <span className="repair__device__tittle-span">
                    Paso <span className="repair__device__tittle-span-step">{props.step}</span>
                </span>
            </div>
        </>
    )
}