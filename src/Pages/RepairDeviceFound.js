import Completado_img from "../Assets/Completado_img.svg";
import Modelo2_img from "../Assets/modelo2_img.png";
import LogoFondo_img from "../Assets/LogoFondo_img.png";
import { Link } from "react-router-dom";
import "../Styles/repair__device__found.scss";
import NavMini from "../Components/NavMini";

export default function RepairDeviceFound() {
    return (
        <div className="repair__device__found">
            <img className="repair__device__found__fondo" src={LogoFondo_img} alt="" />
            <NavMini 
            link="/reparar/celular/marca"
            home="C. Francisco Vila 842"
            />
            <section className="repair__device__found__container">
                <div className="repair__device__found__container-status">
                    <img className="repair__device__found__container-status-img" src={Completado_img} alt="Encontrado" />
                    <div className="repair__device__found__container-status-text">
                        <p className="repair__device__found__container-status-text-p">Dispositivo encontrado</p>
                        <span className="repair__device__found__container-status-text-span">¿Es este tu dispositivo?</span>
                    </div>
                </div>
                <div className="repair__device__found__container-device">
                    <img className="repair__device__found__container-device-img" src={Modelo2_img} alt="HTC DESIRE 10" />
                    <p className="repair__device__found__container-device-p">Tu dispositivo es</p>
                    <h3 className="repair__device__found__container-device-h3">HTC DESIRE 10</h3>
                </div>
                <div className="repair__device__found__container-buttons">
                    <Link to="/reconocer" className="repair__device__found__container-buttons-button">
                        Volver a analizar
                    </Link>
                    <Link to="/reparar/celular/marca/modelo/precio" className="repair__device__found__container-buttons-button">
                        Cotizar reparacion
                    </Link>
                </div>
            </section>
        </div>
    )
}