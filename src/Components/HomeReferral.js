import { Link } from "react-router-dom";
import FlechaVerde_img from "../Assets/FlechaVerde_img.svg"
import Dinero_img from "../Assets/Dinero_img.svg"

export default function HomeReferral() {
    return (
        <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20reparar%20un%20dispositivo%20" target="_blank" className="home__referral">
            <img className="home__referral-img" src={Dinero_img} alt="Ganancias" />
            <div className="home__referral-text">
                <h3 className="home__referral-text-tittle">
                    Gana dinero reparando
                </h3>
                <p className="home__referral-text-p">
                    Hasta $2000 en comisiones
                </p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20reparar%20un%20dispositivo%20" target="_blank" className="home__referral-button">
                <img className="home__referral-button-img" src={FlechaVerde_img} alt="ver referidos" />
            </a>
        </a>
    )
}