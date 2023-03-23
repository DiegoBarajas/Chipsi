// import ComponenteRepararTop from "../Components/ComponenteRepararTop";
// import { Link } from "react-router-dom";
// import "../Styles/reparar__dispositivos.scss"
// import { useContext, useEffect, useState } from "react";
// import axios, { formToJSON } from "axios";
// import { Store } from "../Store";
// import { backend } from '../utils';

// export default function RepararDispositivo() {

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

//     const cookies = document.cookie.split(';');
//     if(!cookies.includes('beneficios=true')){
//         window.location.href = '/reparar/beneficios';
//     }


//     return (
//         <article className="reparar__dispositivo">
//             <ComponenteRepararTop linkBefore="/" progressBar1="current" linkAfterInactive="si" h2="Empecemos" p="Da click en tu dispositivo para continuar" />
//             <div className="reparar__dispositivo__items">
//                 <div className="reparar__dispositivo__items-row">
//                     <Link to="celular">
//                         <img alt="" />
//                         <p>Celular</p>
//                     </Link>
//                     <Link to="tableta">
//                         <img alt="" />
//                         <p>Tablet</p>
//                     </Link>
//                 </div>
//                 <div className="reparar__dispositivo__items-row">
//                     <Link to="smartwatch">
//                         <img alt="" />
//                         <p>Smartwatch</p>
//                     </Link>
//                     <Link to="consola">
//                         <img alt="" />
//                         <p>Consola</p>
//                     </Link>
//                 </div>
//                 <div className="reparar__dispositivo__items-row">
//                     <Link to="laptop">
//                         <img alt="" />
//                         <p>Laptop</p>
//                     </Link>
//                     <Link to="control">
//                         <img alt="" />
//                         <p>Controles</p>
//                     </Link>
//                 </div>
//                 <div className="reparar__dispositivo__items-row">
//                     <Link to="pc">
//                         <img alt="" />
//                         <p>PC</p>
//                     </Link>
//                     <Link to="otros">
//                         <img alt="" />
//                         <p>Otros</p>
//                     </Link>
//                 </div>
//             </div>
//             <span>Al seguir con este proceso estas de acuerdo y aceptas todos los <Link>Terminos y condiciones.</Link></span>
//         </article>
//     );
// }

import "../Styles/repair__device.scss";
import RepairTop from "../Components/RepairTop"; 
import RepairDeviceItems from "../Components/RepairDeviceItems";
import { Navigate, Redirect } from "react-router-dom";

export default function RepairDevice() {
    window.location.href = 'https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20reparar%20un%20dispositivo%20'
    return <Navigate to='/'/>
}
