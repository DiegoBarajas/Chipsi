import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { backend } from '../../../utils';

const StatusMenos1 = () => {
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

    const cancelar = async()=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("¿Estas Seguro que quieres cancelar tu pedido?")){
          await axios.delete(backend()+'/api/pedido/'+id);
          window.location.href = '/';
        }
    }


  return (
    <div>
            <h1>Pedido Hecho!!!</h1>
            <p>ID de Pedido: {pedido._id}</p>
            <p>Pedido a nombre de {cliente.name}</p>
            <p>Se recogera en {pedido.direccion}</p>
            <p>Telefono de contacto {pedido.telefono}</p>
            <br/>
            <h3>Para continuar paga tu pedido</h3>

            <Link to={'algo'}>
                Pagar
            </Link>
            <Link to={'/pedidos/ticket/'+id}>
                Ver ticket
            </Link>
            <button onClick={cancelar}>
              Cancelar Pedido
            </button>
        </div>
  )
}

export default StatusMenos1