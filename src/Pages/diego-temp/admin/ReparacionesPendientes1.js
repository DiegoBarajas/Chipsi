import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend } from '../../../utils';

const ReparacionesPendientes1 = () => {
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
            if(rep.status === 1){
                aux.push(rep);
            }
        });

        setHoy(aux);
    }, [reparaciones]);

    return (
        <div>
            <h3>Reparaciones sin recoger</h3>
            {
                hoy.map((hoy)=>{
                    return(<div>
                        <h4>ID {hoy._id}</h4>
                        <p>ID del cliente: {hoy.cliente}</p>
                        <p>Direccion: {hoy.direccion}</p>
                        <p>Fecha: {hoy.fecha}</p>
                        <p>Hora en el que se hizo el pedido: {hoy.hora}</p>
                        <br/><br/>
                    </div>);
                })
            }
        </div>
    )
}

export default ReparacionesPendientes1