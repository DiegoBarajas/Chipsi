// import { Link, useParams } from "react-router-dom";
// import ComponenteRepararTop from "../Components/ComponenteRepararTop";
// import ComponenteReconocerDispositivo from "../Components/ComponenteReconocerDispositivo";
// import repararBuscarCSS from "../Styles/componente__reparar__buscador.scss"
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {backend} from '../utils';

// export default function RepararMarca() {

//     let {producto} = useParams();
//     let obj, aux = [];

//     const [ lista, setLista ] = useState([]);
//     const  [busqueda, setBusqueda] = useState('');
//     const linkBefore = "/reparar/"+producto;

//     useEffect(()=>{
//             const getUsuarios = async()=>{
//             const res = await axios.get(backend()+'/admin/marca');
//             setLista(res.data);
//         }
//         getUsuarios();

//         setBusqueda(document.getElementById('buscar').value.toLowerCase())

//     }, [lista]);

//     obj = lista;
//     for(let i=0; i<obj.length;i++){
//         if(obj[i].producto === producto){
//             aux.push(obj[i]);
//         }
//     }

//     let resultado = [];
//     for(let i=0 ; i<aux.length ; i++){
//         const mar = aux[i].nombre.toLowerCase();

//         if(mar.search(busqueda) >= 0){
//             resultado.push(aux[i]);
//         } 
//     }

//     if(busqueda === ''){
//         return (
//             <article className="reparar__marca">
//                 <ComponenteRepararTop
//                     linkBefore={linkBefore}
//                     linkBar1="/reparar"
//                     linkBar2="/reparar/celular"
//                     progressBar1="complete"
//                     progressBar2="complete"
//                     progressBar3="current"
//                     linkAfterInactive="si"
//                     h2="¿Que marca es?"
//                     p="Da click en la marca de tu dispositivo" />

//                     <div className="componente__reparar__buscador" style={repararBuscarCSS}>
//                         <input type="text" placeholder="Buscar..." id="buscar" />
//                         <button>
//                             <img alt="" />
//                         </button>
//                     </div>

//                     <div className="reparar__marca__items">
//                         {
//                             aux.map(list =>(
//                                     <Link to={list.nombre}>
//                                         <div className="reparar__marca__items-imagen">
//                                             <img src={list.img} alt="" />
//                                         </div>
//                                         <p>{list.nombre}</p>
//                                     </Link>
//                             ))
//                         }
//                     </div>
//                 <ComponenteReconocerDispositivo />
//             </article>
//         )
//     }else{
//         return (
//             <article className="reparar__marca">
//                 <ComponenteRepararTop
//                     linkBefore={linkBefore}
//                     linkBar1="/reparar"
//                     linkBar2="/reparar/celular"
//                     progressBar1="complete"
//                     progressBar2="complete"
//                     progressBar3="current"
//                     linkAfterInactive="si"
//                     h2="¿Que marca es?"
//                     p="Da click en la marca de tu dispositivo" />

//                     <div className="componente__reparar__buscador" style={repararBuscarCSS}>
//                         <input type="text" placeholder="Buscar..." id="buscar" />
//                         <button>
//                             <img alt="" />
//                         </button>
//                     </div>

//                     <div className="reparar__marca__items">
//                         {
//                             resultado.map(list =>(
//                                     <Link to={list.nombre}>
//                                         <div className="reparar__marca__items-imagen">
//                                             <img src={list.img} alt="" />
//                                         </div>
//                                         <p>{list.nombre}</p>
//                                     </Link>
//                             ))
//                         }
//                     </div>
//                 <ComponenteReconocerDispositivo />
//             </article>
//         )
//     }
// }

import RepairTop from "../Components/RepairTop";
import RepairRecognize from "../Components/RepairRecognize";
import RepairBrandSearch from "../Components/RepairBrandSearch";
import RepairBrandItems from "../Components/RepairBrandItems";
import "../Styles/repair__brand.scss";

export default function RepairBrand() {
    return (
        <div className="repair__brand">
            <RepairTop
                home="C. Francisco villa #842"
                tittle="Selecciona tu marca"
                step="3/4"
                link="/reparar/celular"
            />
            <RepairBrandSearch 
            placeholder="Xioami, Apple, Samsumg, etc.."
            />
            <RepairBrandItems />
            <RepairRecognize />
        </div>
    )
}
