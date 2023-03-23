import { Link } from "react-router-dom"
import FlechaNegra_img from "../Assets/FlechaNegra_img.svg"
import Moto_img from "../Assets/Moto_img.svg"

export default function HomeCurrent() {
    return (
        <Link to="/servicio" className="home__current">
            <img className="home__current-img" src={Moto_img} alt="camino" />
            <div className="home__current-info">
                <h3 className="home__current-info-tittle">Reparación en curso</h3>
                <div className="home__current-info-step">
                    <p className="home__current-info-step-p">Camino a tu domicilio</p>
                    <span className="home__current-info-step-hour">11:34 AM</span>
                </div>
                <div className="home__current-info-bar">
                    <span className="home__current-info-bar-complete"></span>
                    <span className="home__current-info-bar-current"></span>
                    <span className="home__current-info-bar-nocomplete"></span>
                    <span className="home__current-info-bar-nocomplete"></span>
                    <span className="home__current-info-bar-nocomplete"></span>
                    <span className="home__current-info-bar-nocomplete"></span>
                </div>
            </div>
            <Link to="/servicio" className="home__current-button">
                <img className="home__current-button-img" src={FlechaNegra_img} alt="ver pedido" />
            </Link>
        </Link>
    )
}