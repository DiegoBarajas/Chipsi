import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backend } from '../../utils';

const Ticket = () => {

    const {id} = useParams();
    const [pedido, setPedido] = useState({});
    const [cliente, setCliente] = useState({});

    useEffect(()=>{
        const getPedido = async()=>{
            const res = await axios.get(backend()+'/api/pedido/'+id);
            setPedido(res.data);

            const res2 = await axios.get(backend()+'/api/usuario/'+res.data.cliente);
            setCliente(res2.data);
        }
        getPedido();
    }, pedido);


    return (
        <div>
            <h3>Cliente: {cliente.name}</h3>
            <h5>Direccion: {pedido.direccion}</h5>
            <h5>Pueden encontrarte {pedido.rango}</h5>
            <h5>Contacto: {pedido.telefono}</h5>
            <br/><br/>
            <p>{pedido.servicio} de {pedido.producto}</p>
            <hr/>
            <p>Pedido hecho el {pedido.fecha} a las {pedido.hora}</p>
            <p>Tipo de pago: {pedido.pago}</p>
            <hr/>
            <h2>Precio: ${pedido.precio} MXN</h2>
            <h2>Descuento: -{pedido.descuento}% (${  pedido.precio * pedido.descuento / 100 } MNX)</h2>
            <h2>Propina: ${pedido.propina}</h2>
            <h1>TOTAL: ${pedido.total} MXN</h1>
        </div>
    )
}

export default Ticket