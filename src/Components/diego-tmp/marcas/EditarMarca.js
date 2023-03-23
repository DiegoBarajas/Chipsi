import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend } from '../../../utils';

const EditarMarca = () => {

    let { id } = useParams();

    const [obj, setObj] = useState({});

    useEffect(()=>{
        const getObj = async()=>{
            const res = await axios.get(backend()+'/admin/PC/'+id);
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


        data.append("mantenimiento",  obj.mantenimiento);
        data.append("puerto",  obj.puerto);
        data.append("humedad",  obj.humedad);
        data.append("mejoraDisco",  obj.mejoraDisco);
        data.append("mejoraRam",  obj.mejoraRam);
        

        if(img.value === ''){
        }else{
            data.append("img", img.files[0]);        
        }

        await axios.put(backend()+'/admin/PC/'+id, data);
        alert("El registro '"+id+"' se ha actualizado.");
    }

    return (
        <div>
            <h1 className='text-center mb-3'>Editar PC</h1>
            <Link className='btn btn-primary' to={'/admin/pc/lista'}>Lista PC</Link>

            <form onSubmit={actualizarDatos}>
                <div class="form-row">

                    <div class="form-group col-md-6">
                        <label for="mantenimiento">
                            mantenimiento
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="mantenimiento" 
                            placeholder="mantenimiento"
                            required

                            value={obj.mantenimiento}
                            name='mantenimiento'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="puerto">
                            puerto
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="puerto" 
                            placeholder="puerto"
                            required

                            value={obj.puerto}
                            name='puerto'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="humedad">
                            humedad
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="humedad" 
                            placeholder="humedad"
                            required

                            value={obj.humedad}
                            name='humedad'
                            onChange={capturarDatos}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="mejoraDisco">
                            mejoraDisco
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="mejoraDisco" 
                            placeholder="mejoraDisco"
                            required

                            value={obj.mejoraDisco}
                            name='mejoraDisco'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="mejoraRam">
                            mejoraRam
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="mejoraRam" 
                            placeholder="mejoraRam"
                            required

                            value={obj.mejoraRam}
                            name='mejoraRam'
                            onChange={capturarDatos}
                        />
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

export default EditarMarca