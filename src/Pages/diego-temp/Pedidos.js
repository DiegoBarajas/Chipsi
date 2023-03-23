import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../../Store';
import { backend } from '../../utils';

const Pedidos = () => {
    
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [pedidos, setPedido] = useState([]);

    let ter = [], act = [];
    const [activos, setActivos] = useState([]);
    const [terminados, setTerminados] = useState([]);

    const estatus = ['Pago Pendiente', 'Asignando repartidor', 'Esperando repartidor', 'En taller', 'Se estan haciendo pruebas al dispositivo', 'Tu dispositivo esta en camino a ti', 'Pedido finalizado'];

    useEffect(()=>{
        const getPedido = async()=>{
            const res = await axios.get(backend()+'/api/pedido');
            setPedido(res.data);
        }
        getPedido();

        for(let i=0 ; i<pedidos.length ; i++){
            if(pedidos[i].cliente === userInfo._id){
                if(pedidos[i].status < 5){
                    act.push(pedidos[i]);
                    setActivos(act);
                }else{
                    ter.push(pedidos[i]);
                    setTerminados(ter);
                }
            }
        }
    }, [pedidos]);

  
    return (
        <div>
            <h1>Pedidos</h1>
            <hr/>
            <h3>Activos</h3>
            {
                activos.map((act) => {
                    return ( <Link to={'/pedidos/status/'+act._id}>
                        <div>
                            <h6>ID {act._id}</h6>
                            <p>{act.servicio} de {act.producto}</p>
                            <p>Status: {estatus[act.status+1]}</p>
                        </div>
                        <br/><br/>
                    </Link>)
                })
            }
            <hr/>
            <h3>Terminados</h3>
            {
                terminados.map((act) => {
                    return ( <Link to={'/pedidos/status/'+act._id}>
                        <div>
                            <h6>ID {act._id}</h6>
                            <p>{act.servicio} de {act.producto}</p>
                            <p>Status: {estatus[act.status+1]}</p>
                        </div>
                        <br/><br/>
                    </Link>)
                })
            }
        </div>
    )
}

export default Pedidos