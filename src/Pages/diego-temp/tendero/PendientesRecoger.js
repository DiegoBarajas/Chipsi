import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../../../Store';
import { backend } from '../../../utils'

const PendientesRecoger = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [pedidos, setPedidos] = useState([]);
    const [activos, setActivos] = useState([]);
    const estatus = ['Asignando repartidor', 'El repartidor recogera el pedido', 'Dispositivo en taller', 'En camino a tu punto', 'El cliente puede recoger el dispositivo'];

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
        pedidos.map((p)=>{
            if(p.status == 1){
                aux.push(p);
            }
        });
        setActivos(aux);

    }, [pedidos]);

    return (
        <div>
            <h1>Mis Pedidos Pendientes de Recoger</h1>
            <br/>
            {
                activos.map((a)=>{
                    return (
                        <div>
                            <Link to={'/tendero/dashboard/pedido/'+a._id}>
                                <h2>ID: {a._id}</h2>
                                <p>{a.servicio} de {a.producto}</p>
                                <p>Fecha: {a.fecha}</p>
                                <p>Hora: {a.hora}</p>
                                <p>Status: {estatus[a.status]}</p>
                                <br/><br/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PendientesRecoger