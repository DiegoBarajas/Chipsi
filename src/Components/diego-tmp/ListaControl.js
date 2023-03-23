import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { backend } from '../../utils';

const ListaControl = () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        const getCelulares = async()=>{
            const res = await axios.get(backend()+'/admin/control');
            setLista(res.data);
        }
        getCelulares();
    }, [lista]);

    const eliminarCelular = async(id)=>{
        await axios.delete(backend()+'/admin/control/' + id);
        await axios.delete(backend()+'/admin/proveedor/control/' + id);

    }

  return (
    <div className='row'>
        <h1>controles</h1>
        <Link className='btn btn-primary' to={'/admin/control/agregar'}>Agregar control</Link>
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
                            <p>joystick: {list.joystick}</p>
                            <p>cruceta: {list.cruceta}</p>
                            <p>boton: {list.boton}</p>
                            <p>bumper: {list.bumper}</p>

                            <p>gatillo: {list.gatillo}</p>
                            <p>mantenimientoPre: {list.mantenimientoPre}</p>
                            <p>mantenimientoCor: {list.mantenimientoCor}</p>
                            <img src={list.img} alt='img celular'/>

                        </div>

                        <div className='card-footer'>
                            <button className='btn btn-danger p-2'  onClick={()=>eliminarCelular(list._id)}>
                                Eliminar
                            </button>

                            <Link className='btn btn-warning m-1' to={"/admin/control/editar/"+list._id}>
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

export default ListaControl