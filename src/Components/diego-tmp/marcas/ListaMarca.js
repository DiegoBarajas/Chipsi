import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { backend } from '../../../utils';

const ListaMarca = () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        const getPC = async()=>{
            const res = await axios.get(backend()+'/admin/marca');
            setLista(res.data);
        }
        getPC();
    }, [lista]);

    const eliminarPC = async(id)=>{
        await axios.delete(backend()+'/admin/marca/' + id);
    }

  return (
    <div className='row'>
        <h1>marcas</h1>
        <Link className='btn btn-primary' to={'/admin/marca/agregar'}>Agregar marca</Link>

        {
            lista.map(list => (
                <div className='col-md-4 p-2' key={list._id}>
                    <div className='card'>
                        
                        <div className='card-header'>
                           <h4>{list.nombre}</h4> 
                        </div>
                        
                        <div className='card-body'>
                            <h5>{list.producto}</h5> 
                            <img src={list.img} />
                        </div>

                        <div className='card-footer'>
                            <button className='btn btn-danger p-2'  onClick={()=>eliminarPC(list._id)}>
                                Eliminar
                            </button>

                            <Link className='btn btn-warning m-1' to={"/admin/marca/editar/"+list._id}>
                                Editar
                            </Link>
                        </div>

                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ListaMarca