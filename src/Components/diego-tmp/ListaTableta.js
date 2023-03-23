import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { backend } from '../../utils';

const ListaTableta = () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        const getCelulares = async()=>{
            const res = await axios.get(backend()+'/admin/tableta');
            setLista(res.data);
        }
        getCelulares();
    }, [lista]);

    const eliminarCelular = async(id)=>{
        await axios.delete(backend()+'/admin/tableta/' + id);
        await axios.delete(backend()+'/admin/proveedor/tableta/' + id);
    }

  return (
    <div className='row'>
        <h1>tabletas</h1>
        <Link className='btn btn-primary' to={'/admin/tableta/agregar'}>Agregar tableta</Link>
        <Link className='btn btn-primary mt-3' to={'/admin/lista'}>Ver Todo</Link>
        
        {
            lista.map(list => (
                <div className='col-md-4 p-2' key={list._id}>
                    <div className='card'>
                        
                    <div className='card-header'>
                           <h4>{list.nombre}</h4> 
                           <h5>Modelo: {list.modelo}</h5>
                           <h5>{list.marca}</h5>
                        </div>
                        
                        <div className='card-body'>
                            <p>display: {list.display}</p>
                            <p>bateria: {list.bateria}</p>
                            <p>boton: {list.boton}</p>
                            <p>tapa: {list.tapa}</p>

                            <p>camara frontal: {list.camaraF}</p>
                            <p>camara principal: {list.camaraP}</p>
                            
                            <p>sistema: {list.sistema}</p>
                            <p>carga: {list.carga}</p>
                            <p>reacondicionamiento: {list.reacondicionamiento}</p>
                            <img src={list.img} alt='img celular'/>

                        </div>

                        <div className='card-footer'>
                            <button className='btn btn-danger p-2'  onClick={()=>eliminarCelular(list._id)}>
                                Eliminar
                            </button>

                            <Link className='btn btn-warning m-1' to={"/admin/tableta/editar/"+list._id}>
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

export default ListaTableta