import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend } from '../../../utils';

const MarcaMasCotizada = () => {const [pedidos, setPedidos] = useState([]);
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
                    if((a.marca == p.marca)){
                        a.cantidad = a.cantidad+1;
                        band=true;
                    }
                });

                if(!band){
                    const json = {
                        marca: p.marca,
                        cantidad: 1
                    }
        
                    array.push(json)
                }
            });

            setMasPedidos(array);
        }

        const aux = masPedidos.sort((a, b)=>{return b.cantidad - a.cantidad});
        
        while(aux.length > 1){
            aux.pop();
        }

        setPedidos5(aux);        
    });


    return (
        <div>

            {
                pedidos5.map((p)=>{
                    return( <h3>Marca mas cotizada: {p.marca}</h3> )
                })
            }
            
        </div>
    )
}

export default MarcaMasCotizada