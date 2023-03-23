import { Link } from "react-router-dom"

export default function RepairBrandItemsItemCircle(props) {
    return(
        <Link to={props.link} className="repair__brand__items-item">
            <img className="repair__brand__items-item-img repair__brand__items-item-circle" src={props.img} alt={props.alt} />
            <p className="repair__brand__items-item-p">{props.text}</p>
        </Link>
    )
}