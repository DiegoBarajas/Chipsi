import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend } from '../../../utils';

const ReparacionesAlMomento = () => {
  
    const date = new Date();
    const mes = date.getMonth()+1;
    const año = date.getFullYear();
    const estatus = ['Asignando repartidor', 'Esperando repartidor', 'En taller', 'Esperando repartidor', 'Pedido finalizado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

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
            const f = rep.fecha.split('/');
            if((f[1] == mes) && (f[2] == año)){
                aux.push(rep);
            }
        });

        setHoy(aux);
    }, [reparaciones]);

    return (
        <div>
            <h3>Reparaciones de este mes ({meses[mes-1]} del {año})</h3>
            {
                hoy.map((hoy)=>{
                    return(<div>
                        <h4>ID {hoy._id}</h4>
                        <p>ID del cliente: {hoy.cliente}</p>
                        <p>Direccion: {hoy.direccion}</p>
                        <p>Fecha: {hoy.fecha}</p>
                        <p>Hora en el que se hizo el pedido: {hoy.hora}</p>
                        <p>Status: {estatus[hoy.status]}</p>
                        <br/><br/>
                    </div>);
                })
            }
        </div>
    )
}

export default ReparacionesAlMomento