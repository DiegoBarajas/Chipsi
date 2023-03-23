import { Link } from "react-router-dom"
import ProTip_img from "../Assets/ProTip_img.svg";
import "../Styles/repair__brand.scss";

export default function RepairRecognize() {
    return (
        <div className="repair__brand__bottom">
            <div className="repair__brand__bottom-tip">
                <div className="repair__brand__bottom-tip-tittle">
                    <img className="repair__brand__bottom-tip-tittle-img" src={ProTip_img} alt="Protip" />
                    <span className="repair__brand__bottom-tip-tittle-span">¡Pro Tip!</span>
                </div>
                <span className="repair__brand__bottom-tip-span">Podemos reconocer tu modelo, marca y dispositivo por ti</span>
            </div>
            <Link to="/reconocer" className="repair__brand__bottom-button">
                Reconocer dispositivo
            </Link>
        </div>
    )
}