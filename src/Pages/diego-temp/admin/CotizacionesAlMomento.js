import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend } from '../../../utils';

const CotizacionesAlMomento = () => {
  
    const date = new Date();
    const mes = date.getMonth()+1;
    const año = date.getFullYear();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const [reparaciones, setReparaciones] = useState([]);
    const [hoy, setHoy] = useState([]);

    useEffect(()=>{
        const getReparaciones = async()=>{
            const res = await axios.get(backend()+'/api/cotizacion');
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

    const proc = (p)=>{
        if(p){
            return (<p>Procedio: Si</p>);
        }else{
            return (<p>Procedio: No</p>);
        }
    }

    return (
        <div>
            <h3>Reparaciones de este mes ({meses[mes-1]} del {año})</h3>
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

export default CotizacionesAlMomento