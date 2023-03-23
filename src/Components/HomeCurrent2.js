//Componente dedicado a los distintos estados de las reparaciones en curso
import { Link } from "react-router-dom"

export default function HomeCurrent2(props) {
    return(
        <Link className="home__current2" to={props.link}>
            <img className="home__current2-img" src={props.img} alt={props.alt} />
            <div className="home__current2-text">
                <h3 className="home__current2-text-h3">
                    {props.h3}
                </h3>
                <span className="home__current2-text-span">
                    {props.span}
                </span>
            </div>
            <Link className="home__current2-button" to={props.link}>
                <img className="home__current2-button-img" src={props.linkImg} alt={props.linkAlt} />
            </Link>
        </Link>
    )
}