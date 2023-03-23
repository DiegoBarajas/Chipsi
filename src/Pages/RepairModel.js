// import ComponenteRepararTop from "../Components/ComponenteRepararTop"
// import ComponenteReconocerDispositivo from "../Components/RepairRecognize"
// import { Link, useParams } from "react-router-dom"
// import "../Styles/reparar__modelo.scss"
// import { useEffect, useState } from "react";
// import axios from "axios";
// import repararBuscarCSS from "../Styles/componente__reparar__buscador.scss"
// import { backend } from '../utils';

// export default function RepararModelo() {

//     let {producto, marca, servicio} = useParams();
//     let obj, aux = [];

//     const [ lista, setLista ] = useState([]);
//     const linkBefore = "/reparar/"+producto+"/"+servicio;
//     const  [busqueda, setBusqueda] = useState('');


//     useEffect(()=>{
//             const getUsuarios = async()=>{
//             const res = await axios.get(backend()+'/admin/'+producto);
//             setLista(res.data);
//         }
//         getUsuarios();
        
//         setBusqueda(document.getElementById('buscar').value.toLowerCase())

//     }, [lista]);

//     obj = lista;
//     for(let i=0; i<obj.length;i++){
//         if(obj[i].marca === marca){
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
//             <article className="reparar__modelo">
                
//                             <ComponenteRepararTop
//                             linkBefore={linkBefore}
//                             linkBar1="/reparar"
//                             linkBar2="/reparar/celular"
//                             linkBar3="/reparar/celular/marca"
//                             progressBar1="complete"
//                             progressBar2="complete"
//                             progressBar3="complete"
//                             progressBar4="current"
//                             linkAfterInactive="si"
//                             h2="Cuentanos del modelo"
//                             p="Da click en el modelo de tu dispositivo" />

//                         <div className="componente__reparar__buscador" style={repararBuscarCSS}>
//                             <input type="text" placeholder="Buscar..." id="buscar" />
//                             <button>
//                                 <img alt="" />
//                             </button>
//                         </div>

//                         <div className="reparar__modelo__items">
//                             {
//                                 aux.map(list => (
//                                     <div >

//                                         <Link to={list._id+'/middleware'} className="reparar__modelo__items-item">
//                                             <div className="reparar__modelo__items-item-img">
//                                                 <img src={list.img} alt="" />
//                                             </div>
//                                             <p>{list.nombre}</p>
//                                         </Link>
//                                     </div>

//                                 ))
//                             }
//                         </div>
//                         <ComponenteReconocerDispositivo />
                
//             </article>
//         )
//     }else{
//         return (
//             <article className="reparar__modelo">
                
//                             <ComponenteRepararTop
//                             linkBefore={linkBefore}
//                             linkBar1="/reparar"
//                             linkBar2="/reparar/celular"
//                             linkBar3="/reparar/celular/marca"
//                             progressBar1="complete"
//                             progressBar2="complete"
//                             progressBar3="complete"
//                             progressBar4="current"
//                             linkAfterInactive="si"
//                             h2="Cuentanos del modelo"
//                             p="Da click en el modelo de tu dispositivo" />

//                         <div className="componente__reparar__buscador" style={repararBuscarCSS}>
//                             <input type="text" placeholder="Buscar..." id="buscar" />
//                             <button>
//                                 <img alt="" />
//                             </button>
//                         </div>

//                         <div className="reparar__modelo__items">
//                             {
//                                 resultado.map(list => (
//                                     <div >

//                                         <Link to={list._id+'/middleware'} className="reparar__modelo__items-item">
//                                             <div className="reparar__modelo__items-item-img">
//                                                 <img src={list.img} alt="" />
//                                             </div>
//                                             <p>{list.nombre}</p>
//                                         </Link>
//                                     </div>

//                                 ))
//                             }
//                         </div>
//                         <ComponenteReconocerDispositivo />
                
//             </article>
//         )
//     }
// }

import RepairRecognize from "../Components/RepairRecognize";
import RepairTop from "../Components/RepairTop";
import RepairModelSearch from "../Components/RepairModelSearch";
import RepairModelItems from "../Components/RepairModelItems";
import "../Styles/repair__model.scss";

export default function RepairModel() {
    return(
        <div className="repair__model">
            <RepairTop
            home="C. Francisco Villa 842"
            tittle="Selecciona tu modelo"
            step="4/4"
            link="/reparar/celular/marca"
            />
            <RepairModelSearch 
            placeholder="A9S, DESIRE 10, M10..."
            />
            <RepairModelItems />
            <RepairRecognize />
            {/* Para el boton de reconocer diseñe 2 interfaces, RepairDeviceFound y RepairDeviceNotFound que es a donde 
            debera mandar el analisis del dispositivo para reconocer, en caso de que haya coincidencia sera RepairDeviceFound
            y en caso de que no haya sera RepairDeviceNotFound */}
        </div>
    )
}
