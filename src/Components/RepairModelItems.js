import RepairModelItemsItem from "../Components/RepairModelItemsItem";
import Modelo1_img from "../Assets/modelo1_img.png";
import Modelo2_img from "../Assets/modelo2_img.png";
import Modelo3_img from "../Assets/modelo3_img.png";
import Modelo4_img from "../Assets/modelo4_img.png";
import Modelo5_img from "../Assets/modelo5_img.png";
import Modelo6_img from "../Assets/modelo6_img.png";
import Modelo7_img from "../Assets/modelo7_img.png";
import Modelo8_img from "../Assets/modelo8_img.png";
import Modelo9_img from "../Assets/modelo9_img.png";

export default function RepairModelItems() {
    return (
        <section className="repair__model__items">
            <RepairModelItemsItem
                link="precio"
                img={Modelo1_img}
                alt="A9S"
                text="A9S"
            />
            <RepairModelItemsItem
                link="precio"
                img={Modelo2_img}
                alt="DESIRE 10"
                text="DESIRE 10"
            />
            <RepairModelItemsItem
                link="precio"
                img={Modelo3_img}
                alt="DESIRE 825"
                text="DESIRE 825"
            />
            <RepairModelItemsItem
                link="precio"
                img={Modelo4_img}
                alt="M10"
                text="M10"
            />
            <RepairModelItemsItem
                link="precio"
                img={Modelo5_img}
                alt="510"
                text="510"
            />
            <RepairModelItemsItem
                link="precio"
                img={Modelo6_img}
                alt="526"
                text="526"
            />
            <RepairModelItemsItem
                link="precio"
                img={Modelo7_img}
                alt="530"
                text="530"
            />
            <RepairModelItemsItem
                link="precio"
                img={Modelo8_img}
                alt="626"
                text="626"
            />
            <RepairModelItemsItem
                link="precio"
                img={Modelo9_img}
                alt="630"
                text="630"
            />
        </section>
    )
}