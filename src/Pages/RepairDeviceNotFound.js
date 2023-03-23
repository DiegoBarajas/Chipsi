import Error_img from "../Assets/Error_img.svg";
import { Link } from "react-router-dom";
import LogoFondo_img from "../Assets/LogoFondo_img.png";
import "../Styles/repair__device__notfound.scss";
import NavMini from "../Components/NavMini";

export default function RepairDeviceNotFound() {
    return (
        <div className="repair__device__notfound">
            <img className="repair__device__notfound__fondo" src={LogoFondo_img} alt="" />
            <NavMini
                home="C. Francisco Villa 842"
                link="/reparar/celular/marca"
            />
            <section className="repair__device__notfound__container">
                <div className="repair__device__notfound__container-status">
                    <img className="repair__device__notfound__container-img" src={Error_img} alt="Error" />
                    <div className="repair__device__notfound__container-status-text">
                        <p className="repair__device__notfound__container-status-text-p">
                            Dispositivo no encontrado
                        </p>
                        <span className="repair__device__notfound__container-status-text-span">
                            El análisis no arrojo ninguna información
                        </span>
                    </div>
                </div>
                <div className="repair__device__notfound__container-text">
                    <p className="repair__device__notfound__container-text-p">
                        Prueba a volver a analizar, si el problema persiste intenta lo siguiente:
                        <ul className="repair__device__notfound__container-text-p-ul">
                            <li className="repair__device__notfound__container-text-p-ul-li">Reiniciar aplicación</li>
                            <li className="repair__device__notfound__container-text-p-ul-li">Comprobar conexión a la red</li>
                            <li className="repair__device__notfound__container-text-p-ul-li">Seleccionar modelo manualmente</li>
                        </ul>
                    </p>
                    <span className="repair__device__notfound__container-text-span">
                        Si aun desconoces tu modelo nosotros podemos ayudarte via WhatsApp.
                        <a className="repair__device__notfound__container-text-span-link" href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20reparar%20un%20dispositivo%20" target="_blank" rel="noopener noreferrer">
                            Contactanos
                        </a>
                    </span>
                </div>
                <div className="repair__device__notfound__container-buttons">
                    <Link to="/reconocer" className="repair__device__notfound__container-buttons-button">
                        Volver a analizar
                    </Link>
                    <Link to="/reparar/celular/marca" className="repair__device__notfound__container-buttons-button">
                        Seleccionar manualmente
                    </Link>
                </div>
            </section>
        </div>
    )
}