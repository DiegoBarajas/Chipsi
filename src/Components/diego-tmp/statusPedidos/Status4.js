import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend } from '../../../utils';

const Status4 = () => {
  const {id} = useParams();
  const [pedido, setPedido] = useState({});
  const [cliente, setCliente] = useState({});
  const [repartidor, setRepartidor] = useState({});



    useEffect(()=>{
        const getPedido = async()=>{
            const res = await axios.get(backend()+'/api/pedido/'+id);
            setPedido(res.data);

            const res2 = await axios.get(backend()+'/api/usuario/'+res.data.cliente);
            setCliente(res2.data);

            const res3 = await axios.get(backend()+'/api/usuario/'+res.data.repartidor);
            setRepartidor(res3.data);
        }
        getPedido();
    }, pedido);

    return (
      <div>
        <h1>Tu dispositivo esta como nuevo y está en camino a tu domicilio</h1>
        <p>Pronto el repartidor se comunicará contigo al número "{pedido.telefono}" para comunicarte que esta en camino y llegara a tu domicilio.</p>
        <p>Tu repartidor es: {repartidor.name}</p>
        <br/><br/><br/>
        <h3>ID del pedido {pedido._id}</h3>
        <h3>Cliente: {cliente.name}</h3>
        <h3>Pedido realizado el {pedido.fecha} a las {pedido.hora}</h3>
        <br/>
        <h4>Total: ${pedido.total} MNX</h4>
        <h4>Metodo de pago: {pedido.pago}</h4>

        <Link to={'/pedidos/ticket/'+id}>Ver Ticket</Link>
      </div>
    )
}

export default Status4