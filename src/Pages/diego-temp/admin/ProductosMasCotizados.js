import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend } from '../../../utils';

const ProductosMasCotizados = () => {const [pedidos, setPedidos] = useState([]);
    const [masPedidos, setMasPedidos] = useState([]);
    const [pedidos5, setPedidos5] = useState([]);

    useEffect(()=>{
        const getPedidos = async()=>{
            const res = await axios.get(backend()+'/api/cotizacion');
            setPedidos(res.data);
        }
        getPedidos();

        if(masPedidos.length === 0){
            const array = [];
            pedidos.map((p)=>{

                let band = false;

                array.map((a)=>{
                    if((a.producto == p.nombre_producto) && (a.servicio == p.servicio)){
                        a.cantidad = a.cantidad+1;
                        band=true;
                    }
                });

                if(!band){
                    const json = {
                        servicio: p.servicio,
                        producto: p.nombre_producto,
                        cantidad: 1
                    }
        
                    array.push(json)
                }
            });

            setMasPedidos(array);
        }

        const aux = masPedidos.sort((a, b)=>{return b.cantidad - a.cantidad});
        
        while(aux.length > 5){
            aux.pop();
        }

        setPedidos5(aux);        
    });


    return (
        <div>
            <h1>Cotizaciones mas solicitadas</h1>
            <br/>
            <br/>

            {
                pedidos5.map((p)=>{
                    return(
                    <div>
                        <h4>Cantidad: {p.cantidad}</h4>
                        <p>Producto: {p.producto}</p>
                        <p>Servicio: {p.servicio}</p>
                        <br/>
                    </div>
                    )
                })
            }
            
        </div>
    )
}

export default ProductosMasCotizados