// import ComponenteRepararTop from "../Components/ComponenteRepararTop"
// import ComponenteBeneficios from "../Components/ComponenteBeneficios"
// import { Link, useParams } from "react-router-dom"
// import "../Styles/reparar__precio.scss";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { backend } from '../utils';
// import { Store } from "../Store";

// export default function RepararPrecio() {

//     let {producto, servicio, marca, id} = useParams();
//     const { state, dispatch: ctxDispatch } = useContext(Store);
//     const { userInfo } = state;

//     const [obj, setObj] = useState({});
//     const linkBefore = "/reparar/"+producto+"/"+servicio+"/"+marca+"";

//    // const [cotizacion, setCotizacion] = useState('');

//     useEffect(()=>{
//             const getUsuarios = async()=>{
//             const res = await axios.get(backend()+'/admin/'+producto+"/"+id);
//             setObj(res.data);

//             /*if(cotizacion === ''){
//                 const formData = new FormData();
//                 formData.append('cliente', userInfo._id);
//                 formData.append('producto', obj.nombre);

//                 const respuesta = await axios.post(backend()+'/api/cotizacion', formData);
//                 await setCotizacion(respuesta.data._id);
//             }*/
//         }

//         getUsuarios();
//     });

//     const pasarInfo = ()=>{
//         //localStorage.setItem('cotizacion', cotizacion);
//     }

//     return (
//         <article className="reparar__precio">
//             <ComponenteRepararTop
//                 linkBefore={linkBefore}
//                 progressBar1="clean"
//                 progressBar2="clean"
//                 progressBar3="clean"
//                 progressBar4="clean"
//                 tittleVisible="tittleClean"
//                 linkAfterInactive="si" />
//             <h2>${obj[servicio]}</h2>
//             <span className="spancaca">{obj.nombre} como nuevo</span>
//             <div className="reparar__precio-device">
//                 <img src={obj.img} alt="" />
//                 <img alt="" />
//             </div>
//             <ComponenteBeneficios idClean="clean"/>
//             <Link className="buttonpay" onClick={pasarInfo}  to={'confirmar'}> 
//                 Continuar
//                 <img alt="" />
//             </Link>
//         </article>
//     )
// }

import { Link } from "react-router-dom";
import Modelo2_img from "../Assets/modelo2_img.png";
import RelojPrecio_img from "../Assets/RelojPrecio_img.svg";
import ProTip_img from "../Assets/ProTip_img.svg";
import FlechaVerde_img from "../Assets/FlechaVerde_img.svg";
import NavMini from "../Components/NavMini";
import RepairPriceBenefit from "../Components/RepairPriceBenefit";
import "../Styles/repair__price.scss";

export default function RepairPrice() {
    return (
        <div className="repair__price">
            <NavMini 
            home="C. Francisco Villa 842"
            link="/reparar/celular/marca"
            />
            <img className="repair__price-device" src={Modelo2_img} alt="DESIRE 10" />
            <section className="repair__price__container">
                <div className="repair__price__container-tittle">
                    <h1 className="repair__price__container-tittle-h1">Reparación display</h1>
                    <h2 className="repair__price__container-tittle-h2">HTC DESIRE 10</h2>
                </div>
                <div className="repair__price__container-price">
                    <h3 className="repair__price__container-price-h3">MX$890</h3>
                    <span className="repair__price__container-price-span">MX$1090</span>
                </div>
                <div className="repair__price__container-duration">
                    <img className="repair__price__container-duration-img" src={RelojPrecio_img} alt="Reloj" />
                    <div className="repair__price__container-duration-text">
                        <span className="repair__price__container-duration-text-span">
                            Duración aproximada del servicio
                        </span>
                        <p className="repair__price__container-duration-text-p">
                            8 horas
                        </p>
                    </div>
                </div>
                <div className="repair__price__container__quality">
                    <div className="repair__price__container__quality-tittle">
                        <div className="repair__price__container__quality-tittle-top">
                            <p className="repair__price__container__quality-tittle-top-p">
                                Calidad
                            </p>
                            <span className="repair__price__container__quality-tittle-top-span">
                                Obligatorio
                            </span>
                            <Link to="/guia/display" className="repair__price__container__quality-tittle-top-link">
                                Ver guía
                                <img className="repair__price__container__quality-tittle-top-link-img" src={FlechaVerde_img} alt="ir" />
                            </Link>
                        </div>
                        <span className="repair__price__container__quality-tittle-span">
                            Selecciona la calidad de la refacción, ¡Todas las calidades son excelentes y 100% funcionales!
                        </span>
                    </div>
                    <div className="repair__price__container__quality-chipsi">
                        <p className="repair__price__container__quality-chipsi-p">
                            Dejar que chipsi decida
                        </p>
                        <input className="repair__price__container__quality-chipsi-input" type="checkbox" id="ChipsiDecide" />
                        <label className="repair__price__container__quality-chipsi-label" htmlFor="ChipsiDecide">
                            <span className="repair__price__container__quality-chipsi-label-span">
                            </span>
                        </label>
                    </div>
                    {/* Una ves este seleccionada la opcion 
                    "dejar que chipsi decida" los inputs de 
                    seleccion deberan ser innacesibles y usaran
                     una opacidad reducida a traves de una clase */}
                    <form className="repair__price__container__quality-items repair__price__container__quality-items-inactive">
                        <input className="repair__price__container__quality-items-input" id="CalidadIncell" type="radio" name="calidad-display" value="CalidadIncell" />
                        <label className="repair__price__container__quality-items-label" htmlFor="CalidadIncell">
                            <p className="repair__price__container__quality-items-label-p">Incell</p>
                            <span className="repair__price__container__quality-items-label-span">MX$980</span>
                        </label>
                        <input className="repair__price__container__quality-items-input" id="CalidadOled" type="radio" name="calidad-display" value="CalidadOled" />
                        <label className="repair__price__container__quality-items-label" htmlFor="CalidadOled">
                            <p className="repair__price__container__quality-items-label-p">Oled AAA</p>
                            <span className="repair__price__container__quality-items-label-span">MX$1080</span>
                        </label>
                        <input className="repair__price__container__quality-items-input" id="CalidadOriginal" type="radio" name="calidad-display" value="CalidadOriginal" />
                        <label className="repair__price__container__quality-items-label" htmlFor="CalidadOriginal">
                            <p className="repair__price__container__quality-items-label-p">Original</p>
                            <span className="repair__price__container__quality-items-label-span">MX$1280</span>
                        </label>
                    </form>
                    <div className="repair__price_container__quality-tip">
                        <div className="repair__price__container__quality-tip-tittle">
                            <img className="repair__price__container__quality-tip-tittle-img" src={ProTip_img} alt="Foco" />
                            <span className="repair__price__container__quality-tip-tittle-span">¡Pro Tip!</span>
                        </div>
                        <span className="repair__price__container__quality-tip-span">Nuestros técnicos pueden decidir la calidad de refacción ideal para tu dispositivo, tomando en cuenta el precio, calidad y resistencia.</span>
                    </div>
                </div>
                <div className="repair__price__container__color">
                    <div className="repair__price__container__color-tittle">
                        <div className="repair__price__container__color-tittle-top">
                            <p className="repair__price__container__color-tittle-top-p">
                                Color
                            </p>
                            <span className="repair__price__container__color-tittle-top-span">
                                Obligatorio
                            </span>
                        </div>
                        <span className="repair__price__container__color-tittle-span">
                            Selecciona el color ideal para tu dispositivo
                        </span>
                    </div>
                    <form className="repair__price__container__color-items">
                        <input className="repair__price__container__color-items-input" id="rojo" type="radio" name="color-refaccion" value="rojo" />
                        <label className="repair__price__container__color-items-label" htmlFor="rojo">
                            <span className="repair__price__container__color-items-label-span repair__price__container__color-items-label-span-red"></span>
                            <p className="repair__price__container__color-items-label-p">Rojo</p>
                        </label>
                        <input className="repair__price__container__color-items-input" id="negro" type="radio" name="color-refaccion" value="negro" />
                        <label className="repair__price__container__color-items-label" htmlFor="negro">
                            <span className="repair__price__container__color-items-label-span repair__price__container__color-items-label-span-black"></span>
                            <p className="repair__price__container__color-items-label-p">Negro</p>
                        </label>
                        <input className="repair__price__container__color-items-input" id="blanco" type="radio" name="color-refaccion" value="blanco" />
                        <label className="repair__price__container__color-items-label" htmlFor="blanco">
                            <span className="repair__price__container__color-items-label-span repair__price__container__color-items-label-span-white"></span>
                            <p className="repair__price__container__color-items-label-p">Blanco</p>
                        </label>
                        <input className="repair__price__container__color-items-input" id="gris" type="radio" name="color-refaccion" value="gris" />
                        <label className="repair__price__container__color-items-label" htmlFor="gris">
                            <span className="repair__price__container__color-items-label-span repair__price__container__color-items-label-span-grey"></span>
                            <p className="repair__price__container__color-items-label-p">Gris</p>
                        </label>
                        <input className="repair__price__container__color-items-input" id="dorado" type="radio" name="color-refaccion" value="dorado" />
                        <label className="repair__price__container__color-items-label" htmlFor="dorado">
                            <span className="repair__price__container__color-items-label-span repair__price__container__color-items-label-span-golden"></span>
                            <p className="repair__price__container__color-items-label-p">Dorado</p>
                        </label>
                        <input className="repair__price__container__color-items-input" id="azul" type="radio" name="color-refaccion" value="azul" />
                        <label className="repair__price__container__color-items-label" htmlFor="azul">
                            <span className="repair__price__container__color-items-label-span repair__price__container__color-items-label-span-blue"></span>
                            <p className="repair__price__container__color-items-label-p">Azul</p>
                        </label>
                    </form>
                </div>
                <RepairPriceBenefit />
            </section>
            <div className="repair__price__pay">
                <div className="repair__price__pay-price">
                    <p className="repair__price__pay-price-p">MX$890</p>
                    <span className="repair__price__pay-price-span">MX$1080</span>
                </div>
                {/* Se debe aplicar la clase " repair__price__pay-button-inactive"
                hasta que el usuario seleccione el color en caso de ser necesario 
                (ademas de dejar el boton de reparar ahora inutilizado),
                la seleccion de calidad por defecto estara con la opcion "dejar que
                chipsi decida" con la cual ya podra continuar al siguiente paso el
                usuario, el unico caso donde se le prohibira sera cuando no seleccione
                color */}
                <Link className="repair__price__pay-button repair__price__pay-button-inactive" to="confirmar">
                    ¡Reparar ahora!
                </Link>
            </div>
        </div>
    )
}