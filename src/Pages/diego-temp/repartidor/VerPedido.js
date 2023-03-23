import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Store } from '../../../Store';
import { backend } from '../../../utils';

const VerPedido = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const {id} = useParams();
    const [pedido, setPedido] = useState({});
    const [user, setUser] = useState({});
    const [cliente, setCliente] = useState({});

    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    let msg = '';


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
            const res = await axios.get(backend()+'/api/pedido/'+id);
            setPedido(res.data);

            if(res.data.repartidor !== userInfo._id){
                window.location.href = '/';
            }

            const res2 = await axios.get(backend()+'/api/usuario/'+res.data.cliente);
            setCliente(res2.data);
        }
        getPedido();

        


    }, pedido);

    const boton = ()=>{
        if(pedido.pago != 'ChipsiPunto'){
            switch(pedido.status){
                case 1: return(<button onClick={enTaller}>Dispositivo en el taller</button>);
                    break;
                case 4: return(<button onClick={terminado}>Pedido Terminado</button>);
                    break;
                default: return(<div></div>);
            }
        }else{
            switch(pedido.status){
                case 1: return(<button onClick={enTaller}>Dispositivo en el taller</button>);
                    break;
                case 3: return(<button onClick={enCamino}>En camino</button>);
                    break;
                default: return(<div></div>);
            }
        }
    }

    const enTaller = async()=>{
        const formData = new FormData();
        formData.append('status', 2);
        
        await axios.put(backend()+'/api/pedido/'+id, formData);
        window.location.reload();
    }

    const probando = async()=>{
        const formData = new FormData();
        formData.append('status', 3);
        
        await axios.put(backend()+'/api/pedido/'+id, formData);
        window.location.reload();
    }

    const enCamino = async()=>{
        const formData = new FormData();
        formData.append('status', 4);
        
        await axios.put(backend()+'/api/pedido/'+id, formData);
        window.location.reload();
    }

    const terminado = async()=>{
        const formData = new FormData();
        formData.append('status', 5);
        
        await axios.put(backend()+'/api/pedido/'+id, formData);
        window.location.reload();
    }
    

    return (
        <div>
            <h1>Pedido {pedido._id}</h1>
            <h4>Cliente: {cliente.name}</h4>
            <h3>Pedido realizado el {pedido.fecha} a las {pedido.hora}</h3>
            <h3>Direccion {pedido.direccion}</h3>
            <h2>{pedido.servicio} de {pedido.producto}</h2>
            <p>Status: {pedido.status}</p>
            <p>Precio: ${pedido.precio}-{pedido.descuento}%</p>
            <p>Propina: ${pedido.propina}</p>
            <p>Total: ${pedido.total+parseFloat(pedido.propina)}</p><br/><br/>

            {
                boton()
            }

            <h1>{msg}</h1>

            
        </div>
    )
}

export default VerPedido