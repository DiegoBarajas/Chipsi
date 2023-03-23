import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../../../Store';
import { backend } from '../../../utils';

const AceptarPedidos = () => {
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
            if(pedidos[i].status === 0){
                ped.push(pedidos[i]);
            }
        }

        setP(ped);

    }, [pedidos]);

    const aceptarPedido = async(e)=>{
        e.preventDefault();
        
        const id = e.target.name;
        const data = new FormData();

        data.append('pedido', id);
        data.append('repartidor', user._id);

        await axios.put(backend()+'/api/pedido', data);
    }


    return (
        <div>
            <h1>Aceptar Pedidos</h1>
            <Link to={'/repartidor/pedidos/activos'}>Pedidos activos</Link>
            <br/>
            <Link to={'/repartidor/pedidos/terminados'}>Pedidos terminados</Link>
            {
                p.map((act) => {
                    return (<div> 
                                <div>
                                    <h6>ID {act._id}</h6>
                                    <p>Pedido realizado el {act.fecha} a las {act.fecha}</p>
                                    <p>{act.servicio} de {act.producto}</p>
                                    <p>Direccion: {act.direccion}</p>
                                    <p>Telefono: {act.telefono}</p>
                                    <p>Rango: {act.rango}</p>

                                    <form onSubmit={aceptarPedido} name={act._id}>
                                        <button>Aceptar Pedido</button>
                                    </form>
                                </div>
                                <br/><br/>
                            </div>)
                })
            }
        </div>
    )
}

export default AceptarPedidos