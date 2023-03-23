import RepairBrandItemsItemLarge from "./RepairBrandItemsItemLarge"
// Componente utilizado para marcas con logos con un ancho mayor que el 
// alto con una diferencia muy notoria, osea logos rectangulares
import RepairBrandItemsItemCircle from "./RepairBrandItemsItemCircle" 
// Componente utilizado para marcas con 
// logo cuadrado o circular, 
// con medidas proporcionales en ancho y alto, por decir 512 x 512 pixeles
import Huawei_img from "../Assets/Huawei_img.svg";
import Apple_img from "../Assets/Apple_img.svg";
import HTC_img from "../Assets/HTC_img.svg";
import Alcatel_img from "../Assets/Alcatel_img.svg";
import Hisense_img from "../Assets/Hisense_img.svg";
import Lanix_img from "../Assets/Lanix_img.svg";
import Lenovo_img from "../Assets/Lenovo_img.svg";
import Motorola_img from "../Assets/Motorola_img.svg";
import LG_img from "../Assets/LG_img.svg";

export default function RepairBrandItems() {
    return (
        <section className="repair__brand__items">
            {/* No he comprobado si sigue el bug en la busqueda cuando solo aparecen pocos items y 
            la imagen se ensancha a puntos brutales, favor de informarme si sigue el problema uwu */}
            <RepairBrandItemsItemLarge 
            link="modelo"
            img={Alcatel_img}
            alt="Alcatel"
            text="Alcatel"
            />
            <RepairBrandItemsItemLarge 
            link="modelo"
            img={Hisense_img}
            alt="Hisense"
            text="Hisense"
            />
            <RepairBrandItemsItemCircle 
            link="modelo"
            img={Huawei_img}
            alt="Huawei"
            text="Huawei"
            />
            <RepairBrandItemsItemLarge 
            link="modelo"
            img={HTC_img}
            alt="HTC"
            text="HTC"
            />
            <RepairBrandItemsItemCircle 
            link="modelo"
            img={Apple_img}
            alt="Apple"
            text="Apple"
            />
            <RepairBrandItemsItemLarge 
            link="modelo"
            img={Lanix_img}
            alt="Lanix"
            text="Lanix"
            />
            <RepairBrandItemsItemLarge 
            link="modelo"
            img={Lenovo_img}
            alt="Lenovo"
            text="Lenovo"
            />
            <RepairBrandItemsItemCircle 
            link="modelo"
            img={LG_img}
            alt="LG"
            text="LG"
            />
            <RepairBrandItemsItemCircle 
            link="modelo"
            img={Motorola_img}
            alt="Motorola"
            text="Motorola"
            />
        </section>
    )
}