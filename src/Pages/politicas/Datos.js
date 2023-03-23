import ItemText from "../../Components/ItemText";
import DatosJson from "../../texto-politicas/datos.json";

export default function Datos() {
    const text = DatosJson;
    return (
        <>
            <ItemText tittle="Uso de datos" text={text} />
        </>
    )
}   