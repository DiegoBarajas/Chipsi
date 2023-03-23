import { Link } from "react-router-dom"
import OtroWhatsapp_img from "../Assets/OtroWhatsapp_img.svg";
import RepairProblemItemsItem from "./RepairProblemItemsItem";

export default function RepairProblemItems() {
    return (
        <section className="repair__problem__items">
            <RepairProblemItemsItem 
            link="pantalla"
            h4="Pantalla"
            p="Estrellada, mojada, no se ve, o no funciona"
            />
            <RepairProblemItemsItem 
            link="bateria"
            h4="Batería"
            p="Se acaba rápido, carga lento, esta inflada"
            />
            <RepairProblemItemsItem 
            link="carga"
            h4="Carga"
            p="Tienes que mover el cargador para que cargue"
            />
            <RepairProblemItemsItem 
            link="microfono"
            h4="Micrófono"
            p="No te escuchan en llamadas o audios"
            />
            <RepairProblemItemsItem 
            link="auricular"
            h4="Auricular"
            p="No te funcionan los audífonos al conectarlos"
            />
            <RepairProblemItemsItem 
            link="señal"
            h4="Señal"
            p="Poca recepción, te quedas sin señal"
            />
            <RepairProblemItemsItem 
            link="tapa"
            h4="Tapa"
            p="Tapa trasera, estrellada, rallada o mojada"
            />
            <RepairProblemItemsItem 
            link="diagnostico"
            h4="No lo se"
            p="Diagnostico de problema"
            />
            <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20reparar%20un%20dispositivo%20" target="_blank" rel="noopener noreferrer" className="repair__problem__items-item">
                <div className="repair__problem__items-item-whatsapp">
                    <img className="repair__problem__items-item-whatsapp-img" src={OtroWhatsapp_img} alt="WhatsApp" />
                    <h4 className="repair_problem__items-item-h4">Otro</h4>
                </div>
                <p className="repair__problem__items-item-p">¡Cuéntanos mas por WhatsApp!</p>
            </a>
        </section>
    )
}