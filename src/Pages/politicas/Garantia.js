import ItemText from "../../Components/ItemText";
import GarantiaJson from "../../texto-politicas/garantia.json";

export default function Garantia() {
    const text = GarantiaJson;
    return (
        <>
            <ItemText tittle="Garantía de servicios" text={text} />
        </>
    )
}   