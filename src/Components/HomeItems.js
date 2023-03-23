import HomeItemsItem from "./HomeItemsItem"
import Celular_img from "../Assets/Celular_img.png"
import Consola_img from "../Assets/Consola_img.png"
import PC_img from "../Assets/PC_img.png";
import Tableta_img from "../Assets/Tableta_img.png"
import Otros_img from "../Assets/Otros_img.png"
import SmartWatch_img from "../Assets/SmartWatch_img.png"

export default function HomeItems() {
    return (
        <section className="home__repair">
            <h2 className="home__repair-tittle">
                ¿Qué reparamos hoy?
            </h2>
            <div className="home__repair-items">
                <HomeItemsItem 
                img={Celular_img}
                alt="Celular"
                text="Celular"
                />
                <HomeItemsItem 
                img={Consola_img}
                alt="Consola"
                text="Consola"
                />
                <HomeItemsItem 
                img={PC_img}
                alt="PC"
                text="PC"
                />
                <HomeItemsItem 
                img={Tableta_img}
                alt="Tableta"
                text="Tableta"
                />
                <HomeItemsItem 
                img={SmartWatch_img}
                alt="SmartWatch"
                text="SmartWatch"
                />
                <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20reparar%20un%20dispositivo%20" target="_blank" rel="noopener noreferrer" className="home__repair-items-item">
                    <img className="home__repair-items-item-img" src={Otros_img} alt="celular" />
                    <p className="home__repair-items-item-p">Otros</p>
                </a>
            </div>
        </section>
    )
}