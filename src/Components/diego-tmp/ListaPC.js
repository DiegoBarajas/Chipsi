import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { backend } from '../../utils';

const ListaPC = () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        const getPC = async()=>{
            const res = await axios.get(backend()+'/admin/pc');
            setLista(res.data);
        }
        getPC();
    }, [lista]);

    const eliminarPC = async(id)=>{
        await axios.delete(backend()+'/admin/pc/' + id);
        await axios.delete(backend()+'/admin/proveedor/pc/' + id);

    }

  return (
    <div className='row'>
        <h1>PC's</h1>
        <Link className='btn btn-primary' to={'/admin/pc/agregar'}>Agregar PC</Link>
        <Link className='btn btn-primary mt-3' to={'/admin/lista'}>Ver Todo</Link>

        {
            lista.map(list => (
                <div className='col-md-4 p-2' key={list._id}>
                    <div className='card'>
                        
                        <div className='card-header'>
                           <h4>{list._id}</h4> 
                        </div>
                        
                        <div className='card-body'>
                            <p>mantenimiento: {list.mantenimiento}</p>
                            <p>puerto: {list.puerto}</p>
                            <p>humedad: {list.humedad}</p>
                            <p>mejoraDisco: {list.mejoraDisco}</p>
                            <p>mejoraRam: {list.mejoraRam}</p>
                            <img src={list.img} alt='img celular'/>

                        </div>

                        <div className='card-footer'>
                            <button className='btn btn-danger p-2'  onClick={()=>eliminarPC(list._id)}>
                                Eliminar
                            </button>

                            <Link className='btn btn-warning m-1' to={"/admin/pc/editar/"+list._id}>
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

export default ListaPC