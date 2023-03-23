import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../../../Store';
import { backend } from '../../../utils'

const TenderoDashboard = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    
    const date = new Date();
    const mes = date.getMonth()+1+'/'+date.getFullYear();

    const [pedidos, setPedidos] = useState([]);
    const [activos, setActivos] = useState([]);
    const [recoger, setRecoger] = useState([]);
    const [entregar, setEntregar] = useState([]);
    const [esteMes, setEsteMes] = useState(0);

    useEffect(()=>{
        const getPedidos = async()=>{
            const res = await axios.get(backend()+'/api/pedido');
            const aux = res.data;
            const aux2 = [];

            aux.map((a)=>{
                if((a.cliente == userInfo._id) && (a.pago == 'ChipsiPunto')){
                    aux2.push(a);
                }
            });

            setPedidos(aux2);
        }
        getPedidos();

        const aux = [];
        const aux2 = [];
        const aux3 = [];
        const mounth = [];
        pedidos.map((p)=>{
            if(p.status < 5){
                aux.push(p);
            }

            if(p.status == 1){
                aux2.push(p);
            }

            if(p.status == 4){
                aux3.push(p);
            }

            const pm = p.fecha.split('/');
            const pMes = pm[1]+'/'+pm[2];
            if(pMes == mes){
                mounth.push(p);
            }

        });
        setActivos(aux);
        setRecoger(aux2);
        setEntregar(aux3);
        setEsteMes(mounth);

        console.log(esteMes);

    }, [pedidos]);

    return (
        <div>
            <h1>Dashboard Tendero</h1>
            <br/><br/>

            <h3>Mis pedidos activos: {activos.length}<Link to={'/tendero/dashboard/activos'}>+</Link></h3>
            <h3><Link to={'/tendero/dashboard/terminados'}>Pedidos terminados</Link></h3>
            <h3>Mis pedidos pendientes de recoger: {recoger.length}<Link to={'/tendero/dashboard/pendiente-recoger'}>+</Link></h3>
            <h3>Mis pedidos pendientes de entregar: {entregar.length}<Link to={'/tendero/dashboard/pendiente-entregar'}>+</Link></h3>
            <br/>
            <h3>Ganancias de este mes: ${esteMes.length*50}MXN</h3>

        </div>
    )
}

export default TenderoDashboard