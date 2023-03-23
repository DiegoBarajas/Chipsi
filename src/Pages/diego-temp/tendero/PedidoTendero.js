import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backend } from '../../../utils';

const PedidoTendero = () => {
    const {id} = useParams();

    const [pedido, setPedido] = useState({});
    const estatus = ['Asignando repartidor', 'Repartidor recogera el pedido', 'En taller', 'En camino a tu punto', 'Pendiente de entregar', 'Pedido Finalizado']

    useEffect(()=>{
        const getPedido = async()=>{
            const res = await axios.get(backend()+'/api/pedido/'+id);
            setPedido(res.data);
        }
        getPedido();
    }, pedido);

    const terminado = async()=>{
        const formData = new FormData();
        formData.append('status', 5);
        
        await axios.put(backend()+'/api/pedido/'+id, formData);
        window.location.reload();
    }

    if(pedido.status == 4){
        return (    
            <div>
                <h1>Pedido {pedido._id}</h1>
                <br/>
                <p>{pedido.servicio} de {pedido.producto}</p>
                <p>Fecha: {pedido.fecha}</p>
                <p>Hora: {pedido.hora}</p>
                <p>Status: {estatus[pedido.status]}</p>
                <br/>
                <button onClick={terminado}>El cliente recogio el pedido</button>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Pedido {pedido._id}</h1>
                <br/>
                <p>{pedido.servicio} de {pedido.producto}</p>
                <p>Fecha: {pedido.fecha}</p>
                <p>Hora: {pedido.hora}</p>
                <p>Status: {estatus[pedido.status]}</p>
            </div>
        )
    }

    
}

export default PedidoTendero