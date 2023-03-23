import { Link } from "react-router-dom"

export default function HomeItemsItem(props) {
    return (
        <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20reparar%20un%20dispositivo%20" target='_blank' className="home__repair-items-item">
            <img className="home__repair-items-item-img" src={props.img} alt={props.alt} />
            <p className="home__repair-items-item-p">{props.text}</p>
        </a>
    )
}