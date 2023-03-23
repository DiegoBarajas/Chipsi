import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { backend } from '../../../utils';

const DispositivosPendientesTaller = () => {

    const [pedidos, setPedidos] = useState([]);
    const [taller, setTaller] = useState([]);
    const [pruebas, setPruebas] = useState([]);

    useEffect(()=>{
        const getPedidos = async()=>{
            const res = await axios.get(backend()+'/api/pedido');
            setPedidos(res.data);
        }
        getPedidos();

        const auxTaller = [];
        const auxPruebas = [];
        pedidos.map((p)=>{

            if(p.status == 2){
                auxTaller.push(p);
            }

            if((p.status == 3) && (p.pago != 'ChipsiPunto')){
                auxPruebas.push(p);
            }
            
        });

        setTaller(auxTaller);
        setPruebas(auxPruebas);

        console.log(taller);

    }, [pedidos]);

    return (
        <div>
            <h1>T A L L E R</h1>
            <br/>
            <h2>Por reparar</h2>
            {
                taller.map((t)=>{
                    return(
                        <div>
                            <Link to={t._id}>
                                <p>{t.servicio} de {t.producto}</p>
                                <p>Fecha: {t.fecha} a las {t.hora}</p>
                                <br/>
                            </Link>
                        </div>
                    )
                })
            }
            <br/>
            <h2>Por Hacer pruebas</h2>
            {
                pruebas.map((t)=>{
                    return(
                        <div>
                            <Link to={t._id}>
                                <p>{t.servicio} de {t.producto}</p>
                                <p>Fecha: {t.fecha} a las {t.hora}</p>
                                <br/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DispositivosPendientesTaller