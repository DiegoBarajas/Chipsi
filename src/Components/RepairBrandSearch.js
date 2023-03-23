import Lupa_img from "../Assets/Lupa_img.svg";
import "../Styles/repair__brand.scss";

export default function RepairBrandSearch(props) {
    return (
        <div className="repair__brand-search">
            <input placeholder={props.placeholder} className="repair__brand-search-input" type="text" />
            <img className="repair__brand-search-img" src={Lupa_img} alt="buscar" />
        </div>
    )
}