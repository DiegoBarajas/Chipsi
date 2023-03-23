import Celular_img from "../Assets/Celular_img.png";
import PC_img from "../Assets/PC_img.png";
import Consola_img from "../Assets/Consola_img.png";
import Tableta_img from "../Assets/Tableta_img.png";
import SmartWatch_img from "../Assets/SmartWatch_img.png";
import Otros_img from "../Assets/Otros_img.png";
import RepairDeviceItemsItem from "./RepairDeviceItemsItem";

export default function RepairDeviceItems() {
    return (
        <section className="repair__device__items">
            <RepairDeviceItemsItem
                link="celular"
                img={Celular_img}
                alt="Celular"
                text="Celular"
            />
            <RepairDeviceItemsItem
                link="consola"
                img={Consola_img}
                alt="Consola"
                text="Consola"
            />
            <RepairDeviceItemsItem
                link="pc"
                img={PC_img}
                alt="PC"
                text="PC"
            />
            <RepairDeviceItemsItem
                link="tableta"
                img={Tableta_img}
                alt="Tableta"
                text="Tableta"
            />
            <RepairDeviceItemsItem
                link="smartwatch"
                img={SmartWatch_img}
                alt="SmartWatch"
                text="SmartWatch"
            />
            <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20reparar%20un%20dispositivo%20" target="_blank" rel="noopener noreferrer" className="repair__device__items-item">
                <img className="repair__device__items-item-img" src={Otros_img} alt="otros" />
                <p className="repair__device__items-item-p">Otros</p>
            </a>
        </section>
    )
}