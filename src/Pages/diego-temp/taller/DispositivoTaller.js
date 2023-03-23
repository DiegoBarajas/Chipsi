import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { backend } from '../../../utils';
const DispositivoTaller = () => {

    const { id } = useParams();
    const [dispositivo, setDispositivo] = useState({});

    const pruebas = async()=>{
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

    const Boton = ()=>{
        if(dispositivo.status == 2){
            return (
                <button onClick={pruebas}>Reparado, a hacer pruebas</button>
            )
        }else if((dispositivo.status == 3) && (dispositivo.pago != 'ChipsiPunto')){
            return (
                <button onClick={enCamino}>Reparado y probado</button>
            )
        }else{
            return(<div></div>)
        }
    }

    useEffect(()=>{
        const getDispositivo = async()=>{
            const res = await axios.get(backend()+'/api/pedido/'+id);
            setDispositivo(res.data);
        }
        getDispositivo();
    }, dispositivo);

    return (
        <div>
            <h1>Dispositivo {dispositivo._id}</h1>
            <p>{dispositivo.servicio} de {dispositivo.producto}</p>
            <p>Fecha: {dispositivo.fecha} a las {dispositivo.hora}</p>
            <p>Status: {dispositivo.status}</p>
            {
                Boton()
            }
        </div>
    )
}

export default DispositivoTaller