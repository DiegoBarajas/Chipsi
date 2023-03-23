import { Link } from "react-router-dom"
import GarantiaPrecio_img from "../Assets/GarantiaPrecio_img.svg";
import Prueba_img from "../Assets/Prueba_img.svg";
import Envio_img from "../Assets/Envio_img.svg";
import Gota_img from "../Assets/Gota_img.svg";
import Sol_img from "../Assets/Sol_img.svg";
import "../Styles/repair__price.scss";

export default function RepairPriceBenefit() {
    return (
        <div className="repair__price__container__benefit">
            <div className="repair__price__container__benefit-tittle">
                <p className="repair__price__container__benefit-tittle-p">
                    Cuidas tu cartera, cuidas del planeta
                </p>
                <span className="repair__price__container__benefit-tittle-span">
                    Reparar con chipsi no solo te beneficia a ti
                </span>
            </div>
            <Link to="/faq" className="repair__price__container__benefit-item">
                <img className="repair__price__container__benefit-item-img" src={GarantiaPrecio_img} alt="garantia" />
                <p className="repair__price__container__benefit-item-p">Garantía de 6 meses</p>
            </Link>
            <Link to="/faq" className="repair__price__container__benefit-item">
                <img className="repair__price__container__benefit-item-img" src={Prueba_img} alt="prueba" />
                <p className="repair__price__container__benefit-item-p">Prueba de satisfacción de 8 horas</p>
            </Link>
            <Link to="/faq" className="repair__price__container__benefit-item">
                <img className="repair__price__container__benefit-item-img" src={Envio_img} alt="envio" />
                <p className="repair__price__container__benefit-item-p">Envió gratis</p>
            </Link>
            <div className="repair__price__container__benefit-item2">
                <img className="repair__price__container__benefit-item2-img" src={Gota_img} alt="gota" />
                <div className="repair__price__container__benefit-item2-text">
                    <p className="repair__price__container__benefit-item2-text-p">Ahorro de energía y recursos</p>
                    <span className="repair__price__container__benefit-item2-text-span">
                        Reparando con chipsi no solo ahorras dinero, tambien promueves la conservación de recursos primarios del medio ambiente.
                    </span>
                </div>
            </div>
            <div className="repair__price__container__benefit-item2">
                <img className="repair__price__container__benefit-item2-img" src={Sol_img} alt="gota" />
                <div className="repair__price__container__benefit-item2-text">
                    <p className="repair__price__container__benefit-item2-text-p">Reducción gases de efecto invernadero</p>
                    <span className="repair__price__container__benefit-item2-text-span">
                        Menos basura y desechos electrónicos, chipsi devuelve a la vida los dispositivos evitando su desperdicio.
                    </span>
                </div>
            </div>
        </div>
    )
}