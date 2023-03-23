import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { backend } from '../../utils';

const ListaLaptop = () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        const getCelulares = async()=>{
            const res = await axios.get(backend()+'/admin/laptop');
            setLista(res.data);
        }
        getCelulares();
    }, [lista]);

    const eliminarCelular = async(id)=>{
        await axios.delete(backend()+'/admin/laptop/' + id);
        await axios.delete(backend()+'/admin/proveedor/laptop/' + id);

    }

  return (
    <div className='row'>
        <h1>Laptops</h1>
        <Link className='btn btn-primary' to={'/admin/laptop/agregar'}>Agregar Laptop</Link>
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
                            <p>mantenimiento: {list.mantenimiento}</p>
                            <p>puerto: {list.puerto}</p>
                            <p>humedad: {list.humedad}</p>
                            <p>pantalla: {list.pantalla}</p>

                            <p>teclado: {list.teclado}</p>
                            <p>trackpad: {list.trackpad}</p>
                            <p>boton: {list.boton}</p>
                            <p>cargador: {list.cargador}</p>

                            <p>red: {list.red}</p>
                            <p>bateria: {list.bateria}</p>
                            <p>reacondicionamiento: {list.reacondicionamiento}</p>
                            <img src={list.img} alt='img celular'/>

                        </div>

                        <div className='card-footer'>
                            <button className='btn btn-danger p-2'  onClick={()=>eliminarCelular(list._id)}>
                                Eliminar
                            </button>

                            <Link className='btn btn-warning m-1' to={"/admin/laptop/editar/"+list._id}>
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

export default ListaLaptop