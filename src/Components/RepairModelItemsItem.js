import { Link } from "react-router-dom"

export default function RepairModelItemsItem(props) {
    return (
        <Link to={props.link} className="repair__model__items-item">
            <img className="repair__model__items-item-img" src={props.img} alt={props.alt} />
            <p className="repair__model__items-item-p">{props.text}</p>
        </Link>
    )
}