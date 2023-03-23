import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { backend } from '../../../utils';

const ListaProblemas = () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        const getPC = async()=>{
            const res = await axios.get(backend()+'/admin/problema');
            setLista(res.data);
        }
        getPC();
    }, [lista]);

  return (
    <div className='row'>
        <h1>problemas</h1>

        {
            lista.map(list => (
                <div className='col-md-4 p-2' key={list._id}>
                    <div className='card'>
                        
                        <div className='card-header'>
                           <h4>{list.nombre}</h4> 
                           <h5>{list.producto}</h5> 
                           <h5>URL: {list.url}</h5> 
                        </div>
                        
                        <div className='card-body'>
                            <p>{list.descripcion}</p>
                            <img src={list.img} />
                        </div>

                        <div className='card-footer'>
                            <Link className='btn btn-warning m-1' to={"/admin/problema/editar/"+list._id}>
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

export default ListaProblemas