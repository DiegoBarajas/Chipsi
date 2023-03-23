import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend } from '../../../utils';

const ReparacionesHoy = () => {

    const date = new Date();
    const fechaHoy = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    const estatus = ['Asignando repartidor', 'Esperando repartidor', 'En taller', 'Esperando repartidor', 'Pedido finalizado'];


    const [reparaciones, setReparaciones] = useState([]);
    const [hoy, setHoy] = useState([]);

    useEffect(()=>{
        const getReparaciones = async()=>{
            const res = await axios.get(backend()+'/api/pedido');
            setReparaciones(res.data);
        }
        getReparaciones();

        let aux = [];

        reparaciones.map(rep => {
            if(rep.fecha === fechaHoy){
                aux.push(rep);
            }
        });

        setHoy(aux);
    }, [reparaciones]);

    return (
        <div>
            <h3>Reparaciones de hoy ({fechaHoy})</h3>
            {
                hoy.map((hoy)=>{
                    return(<div>
                        <h4>ID {hoy._id}</h4>
                        <p>ID del cliente: {hoy.cliente}</p>
                        <p>Direccion: {hoy.direccion}</p>
                        <p>Hora en el que se hizo el pedido: {hoy.hora}</p>
                        <p>Status: {estatus[hoy.status]}</p>
                        <br/><br/>
                    </div>);
                })
            }
        </div>
    )
}

export default ReparacionesHoy