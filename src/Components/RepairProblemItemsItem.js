import { Link } from "react-router-dom"

export default function RepairProblemItemsItem(props) {
    return (
        <Link to={props.link} className="repair__problem__items-item">
            <h4 className="repair__problem__items-item-h4">{props.h4}</h4>
            <p className="repair__problem__items-item-p">{props.p}</p>
        </Link>
    )
}