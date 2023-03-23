import ItemText from "../../Components/ItemText";
import PoliticaCJson from "../../texto-politicas/politica-chipsipuntos.json";

export default function PoliticaChipsiPuntos() {
    const text = PoliticaCJson;
    return (
        <>
            <ItemText tittle="Política de Chipsi Puntos" text={text} />
        </>
    )
}   