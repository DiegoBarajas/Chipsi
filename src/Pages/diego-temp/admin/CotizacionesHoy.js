import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend } from '../../../utils';

const CotizacionesHoy = () => {

    const date = new Date();
    const fechaHoy = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

    const [reparaciones, setReparaciones] = useState([]);
    const [hoy, setHoy] = useState([]);

    useEffect(()=>{
        const getReparaciones = async()=>{
            const res = await axios.get(backend()+'/api/cotizacion');
            setReparaciones(res.data);
        }
        getReparaciones();
        
        console.log(reparaciones);
        let aux = [];

        reparaciones.map(rep => {
            if(rep.fecha === fechaHoy){
                aux.push(rep);
            }
        });

        setHoy(aux);
    }, [reparaciones]);

    const proc = (p)=>{
        if(p){
            return (<p>Procedio: Si</p>);
        }else{
            return (<p>Procedio: No</p>);
        }
    }

    return (
        <div>
            <h3>Reparaciones de hoy ({fechaHoy})</h3>
            {
                hoy.map((hoy)=>{
                    return(<div>
                        <h4>ID {hoy._id}</h4>
                        <p>Producto: {hoy.producto}</p>
                        <p>Id del Producto: {hoy.id_producto}</p>
                        <p>Servicio: {hoy.servicio}</p>
                        <p>Hora en el que se hizo el pedido: {hoy.hora}</p>
                        {proc(hoy.procedio)}
                        <br/><br/>
                    </div>);
                })
            }
        </div>
    )
}

export default CotizacionesHoy