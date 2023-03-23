import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend } from '../../../utils';

const Status3 = () => {
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
        <h1>Tu dispositivo ha sido reparado, y se esta probando para que todo funcione bien</h1>
        <p>Espera que nuestros tecnicos especializados se encarguen de tu dispositivo.</p>
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

export default Status3