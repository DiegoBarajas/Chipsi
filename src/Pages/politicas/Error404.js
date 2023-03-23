import { Link } from "react-router-dom";
import ImgWorking from "../Assets/cat-error.png";
import "../Styles/working.scss";

export default function Working() {
    return(
        <article className="working">
            <img className="working__img" src={ImgWorking} alt="imagen trabajando" />
            <h2 className="working__h2">La página que buscas no existe</h2>
            <p className="working__p">Vuelve al inicio antes de que te pierdas más</p>
            <Link className="working__link" to="/">
                Volver al inicio
            </Link>
        </article>
    )
}