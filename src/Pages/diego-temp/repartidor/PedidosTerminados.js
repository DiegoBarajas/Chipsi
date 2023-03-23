import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../../Store';
import { backend } from '../../../utils';

const PedidosTerminados = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [user, setUser] = useState({});
    const [pedidos, setPedido] = useState([]);
    const [p, setP] = useState([]);
    let ped = [];

    useEffect(()=>{
        const getUser = async()=>{
            const res = await axios.get(backend()+'/api/usuario/'+userInfo._id);
            setUser(res.data);

            if(!res.data.isDelivery){
                window.location.href = '/';
            }
        }
        getUser();

    }, user);

    useEffect(()=>{
        const getPedido = async()=>{
            const res = await axios.get(backend()+'/api/pedido');
            setPedido(res.data);
        }
        getPedido();

        for(let i=0 ; i<pedidos.length ; i++){
            if((pedidos[i].repartidor === user._id) && (pedidos[i].status === 5)){
                ped.push(pedidos[i]);
            }
        }

        setP(ped);

    }, [pedidos]);

    return (
        <div>
            <h1>Pedidos Terminados</h1>
            <div>
                {
                    p.map((ter) => {
                        return( <div>
                            <h6>ID {ter._id}</h6>
                                    <p>Pedido realizado el {ter.fecha} a las {ter.fecha}</p>
                                    <p>{ter.servicio} de {ter.producto}</p>
                                    <p>Direccion: {ter.direccion}</p>
                                    <p>Telefono: {ter.telefono}</p>
                                    <p>Rango: {ter.rango}</p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default PedidosTerminados