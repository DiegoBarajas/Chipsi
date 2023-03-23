// import ComponenteRepararTop from "../Components/ComponenteRepararTop"
// import { Link, useParams } from "react-router-dom"
// import "../Styles/reparar__problema.scss";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { backend } from '../utils';
// import { Store } from "../Store";

// export default function RepararProblema() {


//     const { state, dispatch: ctxDispatch } = useContext(Store);
//     const { userInfo } = state;

//     const [user, setUser] = useState({});
//     useEffect(()=>{
//         const getUser = async()=>{

//             if(userInfo == null){
//                 const cookies = document.cookie.split(';');
//                 if(!cookies.includes('beneficios=true')){
//                     window.location.href = '/reparar/beneficios';
//                 }            
//             }

//             const res = await axios.get(backend()+'/api/usuario/'+userInfo._id);
//             setUser(res.data);

//             if(!res.data.beneficios){
//                 window.location.href = '/reparar/beneficios';

//             }

//             if(res.data.direccion === undefined){
//                 window.location.href = '/usuario/agregarDireccion';
//             }
//         }
//         getUser();

//     }, user);

//     //Manda al producto
//     let {producto} = useParams();

//     let obj, aux = [];

//     const [ lista, setLista ] = useState([]);

//     useEffect(()=>{
//             const getUsuarios = async()=>{
//             const res = await axios.get(backend()+'/admin/problema');
//             setLista(res.data);
//         }
//         getUsuarios();


//     }, [lista]);

//     obj = lista;
//     for(let i=0; i<obj.length;i++){
//         if(obj[i].producto === producto){
//             aux.push(obj[i]);
//         }
//     }


//     return (
//         <div className="reparar__problema">
//             <ComponenteRepararTop 
//             linkBefore="/reparar" 
//             linkBar1="/reparar" 
//             progressBar1="complete" 
//             progressBar2="current"
//             linkAfterInactive="si"
//             h2="¿Que problema presenta?"
//             p="Da click en el problema de tu dispositivo" />
//             <div className="reparar__problema__items">

//                 {
//                     aux.map(list => (

//                         <div className="reparar__problema__items-row">
//                             <Link to={list.url}>
//                                 <img src={list.img} alt="" />
//                                 <p>{list.nombre}</p>
//                                 <span>{list.descripcion}</span>
//                             </Link>
//                         </div>
//                     ))
//                 }

//             </div>
//         </div>
//     )
// }

import ProTip_img from "../Assets/ProTip_img.svg";
import RepairTop from "../Components/RepairTop";
import "../Styles/repair__problem.scss";
import RepairProblemItems from "../Components/RepairProblemItems";

export default function RepairProblem() {
    return (
        <div className="repair__problem">
            <RepairTop
                link="/reparar"
                home="C. Francisco Villa #842"
                tittle="Cuéntanos el problema"
                step="2/4"
            />
            <RepairProblemItems />
            <span className="repair__problem-tip">
                <div className="repair__problem-tip-tittle">
                    <img className="repair__problem-tip-tittle-img" src={ProTip_img} alt="Tip" />
                    <span className="repair__problem-tip-tittle-span">¡Pro tip!</span>
                </div>
                <span className="repair__problem-tip-span">Podemos diagnosticar tu dispositivo si desconoces el problema</span>
            </span>
        </div>
    )
}