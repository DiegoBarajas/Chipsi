import ItemText from "../../Components/ItemText";
import CookiesJson from "../../texto-politicas/cookies.json";

export default function Cookies() {
    const text = CookiesJson;
    return (
        <>
            <ItemText tittle="Uso de Cookies" text={text} />
        </>
    )
}   