import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { backend } from '../../../utils';

const ListaCupones = () => {

    const [lista, setLista] = useState([]);
    useEffect(()=>{
        const getCupon = async()=>{
            const res = await axios.get(backend()+'/api/cupon');
            setLista(res.data);
        }
        getCupon();
    }, [lista]);

    const eliminar = async(id)=>{
        await axios.delete(backend()+'/api/cupon/' + id);
    }

    const si_no = (b)=>{
        if(b)
            return 'Si';
        else 
            return 'No';
    }

    return (
        <div>
            <h1>Lista Cupones</h1>
            {
                lista.map((l)=>{
                    return (<div>
                        <h3>{l.nombre}</h3>
                        <h4>{l.codigo}</h4>
                        <p>{l.descuento}%</p>
                        <p>Uso unico: {si_no(l.unico)}</p>
                        <p>Se aplica automaticamente: {si_no(l.automatico)}</p>
                        <p>Solo se puede usar la primera vez: {si_no(l.primera)}</p>

                        <button className='btn btn-danger p-2'  onClick={()=>eliminar(l._id)}>
                            Eliminar
                        </button>
                        <br/><br/>

                    </div>)
                })
            }
        </div>
    )
}

export default ListaCupones