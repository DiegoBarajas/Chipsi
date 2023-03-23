import { Link } from "react-router-dom"
import Anuncio_img from "../Assets/Anuncio_img.svg"

export default function HomeSlider() {
    return (
        <section className="home__slider">
            <Link className="home__slider__container" to="/reparar">
                <img className="home__slider__container-img" src={Anuncio_img} alt="Descuento del 15%" />
            </Link>
            <div className="home__slider__index">
                <span className="home__slider__index-circle home__slider__index-circle-current"></span>
                <span className="home__slider__index-circle"></span>
                <span className="home__slider__index-circle"></span>
                <span className="home__slider__index-circle"></span>
                <span className="home__slider__index-circle"></span>
            </div>
        </section>
    )
}