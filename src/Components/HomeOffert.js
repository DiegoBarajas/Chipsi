import { Link } from "react-router-dom"

export default function HomeOffert(props){
    return(
        <div className="home__offers-container">
          <h4 className="home__offers-contaner-tittle">
            {props.tittle}
          </h4>
          <div className="home__offers-container-item">
              <div className="home__offers-container-item-text">
                  <h3 className="home__offers-container-item-text-tittle">
                    {props.tittle2}
                  </h3>
                  <p className="home__offers-container-item-text-p">
                    {props.p}
                  </p>
                  <Link className="home__offers-container-item-text-button" to={props.url}>
                    {props.button}
                  </Link>
              </div>
              <img className="home__offers-container-item-img" src={props.img} alt="envio" />
          </div>
        </div>
    )
}