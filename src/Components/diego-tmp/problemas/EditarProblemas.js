import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend } from '../../../utils';

const EditarProblemas = () => {

    let { id } = useParams();

    const [obj, setObj] = useState({});

    useEffect(()=>{
        const getObj = async()=>{
            const res = await axios.get(backend()+'/admin/problema/'+id);
            setObj(res.data);
        }
        getObj(); 
    }, obj);

    const capturarDatos = (e)=>{
        const {name, value} = e.target;
        setObj({...obj, [name]: value});
    }

    const actualizarDatos = async(e)=>{
        e.preventDefault();

        const img = document.getElementById('img');

        const data = new FormData();    
        data.append("nombre", obj.nombre);
        data.append("producto", obj.producto);
        data.append("descripcion", obj.descripcion);
        data.append("url", obj.url);

        if(img.value === ''){
        }else{
            data.append("img", img.files[0]);        
        }


        await axios.put(backend()+'/admin/problema/'+id, data);
        alert("El registro '"+id+"' se ha actualizado.");
    }

    return (
        <div>
            <h1 className='text-center mb-3'>Editar Problema</h1>
            <Link className='btn btn-primary' to={'/admin/problema/lista'}>Lista Problemas</Link>

            <form onSubmit={actualizarDatos}>
                <h5>{obj.producto}:{obj.url}</h5><br/>
                <div class="form-row">

                    <div class="form-group col-md-6">
                        <label for="nombre">
                            nombre
                        </label>
                        <input 
                            type="text" 
                            id="nombre" 
                            placeholder="nombre"
                            required

                            value={obj.nombre}
                            name='nombre'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="descripcion">
                            descripcion
                        </label>
                        <textarea 
                            id="descripcion" 
                            placeholder="descripcion"
                            required

                            value={obj.descripcion}
                            name='descripcion'
                            onChange={capturarDatos}
                        ></textarea>
                    </div>
                    
                    <div class="form-group col-md-6">
                        <label for="img">
                            img
                        </label>
                        <input 
                            type="file"
                            accept='image/*' 
                            class="form-control" 
                            id="img" 
                            placeholder="img"

                            name='img'
                        />
                    </div>
                    

                    <button type="submit" class="btn btn-primary form-control mt-3">Actualizar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarProblemas