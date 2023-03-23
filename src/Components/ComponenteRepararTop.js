import { Link } from "react-router-dom"
import "../Styles/componente__reparar__top.scss";

export default function ComponenteRepararTop(props) {
    return (
        <div className="reparar__top">
            <div className="reparar__top-bar">
                <Link className="reparar__top-bar-flechita" to={props.linkBefore}>
                    <img alt="" />
                </Link>
                <div className="reparar__top-bar-progress">
                    <Link to={props.linkBar1} className={props.progressBar1}></Link>
                    <Link to={props.linkBar2} className={props.progressBar2}></Link>
                    <Link to={props.linkBar3} className={props.progressBar3}></Link>
                    <Link to={props.linkBar4} className={props.progressBar4}></Link>
                </div>
                <Link className="reparar__top-bar-flechita" id={props.linkAfterInactive} to={props.linkAfter}>
                    <img alt="" />
                </Link>
            </div>
            <div className="reparar__top-tittle" id={props.tittleVisible}>
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </div>
        </div>
    )
}