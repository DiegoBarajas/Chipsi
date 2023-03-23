import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend } from '../../utils';

const EditarPc = () => {

    let { id } = useParams();

    const [obj, setObj] = useState({});
    const [proveedor, setProveedor] = useState({});

    useEffect(()=>{
        const getObj = async()=>{
            const res = await axios.get(backend()+'/admin/PC/'+id);
            setObj(res.data);
        }

        const getProveedor = async()=>{
            const res = await axios.get(backend()+'/admin/proveedor/PC/'+id)
            setProveedor(res.data);
        }
        getObj(); 
        getProveedor();
    }, obj);

    const capturarDatos = (e)=>{
        const {name, value} = e.target;
        setObj({...obj, [name]: value});
    }

    const capturarProveedor = (e)=>{
        const {name, value} = e.target;
        setProveedor({...proveedor, [name]: value});
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
        
        const proveedorData = new FormData();

        proveedorData.append("mantenimiento", proveedor.mantenimiento);
        proveedorData.append("puerto", proveedor.puerto);
        proveedorData.append("humedad", proveedor.humedad);
        proveedorData.append("mejoraDisco", proveedor.mejoraDisco);
        proveedorData.append("mejoraRam", proveedor.mejoraRam);
        

        if(img.value === ''){
        }else{
            data.append("img", img.files[0]);        
        }

        await axios.put(backend()+'/admin/PC/'+id, data);
        await axios.put(backend()+'/admin/proveedor/PC/'+id, proveedorData);

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








                    





<h2>P R O V E E D O R</h2>
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

        value={proveedor.mantenimiento}
        name='mantenimiento'
        onChange={capturarProveedor}
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

        value={proveedor.puerto}
        name='puerto'
        onChange={capturarProveedor}
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

        value={proveedor.humedad}
        name='humedad'
        onChange={capturarProveedor}
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

        value={proveedor.mejoraDisco}
        name='mejoraDisco'
        onChange={capturarProveedor}
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

        value={proveedor.mejoraRam}
        name='mejoraRam'
        onChange={capturarProveedor}
    />
</div>

                    <button type="submit" class="btn btn-primary form-control mt-3">Actualizar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarPc