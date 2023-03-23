import Lupa_img from "../Assets/Lupa_img.svg";

export default function RepairModelSearch(props) {
    return (
        <div className="repair__model-search">
            <input placeholder={props.placeholder} className="repair__model-search-input" type="text" />
            <img className="repair__model-search-img" src={Lupa_img} alt="buscar" />
        </div>
    )
}