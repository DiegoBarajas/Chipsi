import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend } from '../../utils';

const EditarConsola = () => {

    let { id } = useParams();

    const [lista, setLista] = useState([]);
    let obj = [], aux = [];
    useEffect(()=>{
        const getCelulares = async()=>{
            const res = await axios.get(backend()+'/admin/marca');
            setLista(res.data);
        }
        getCelulares();
    }, [lista]);

    obj = lista;
    for(let i=0;i<obj.length;i++){
        if(obj[i].producto === "consola"){
            aux.push(obj[i]);
        }
    }

    const [celular, setcelular] = useState({});
    const [proveedor, setProveedor] = useState({});

    useEffect(()=>{
        const getcelular = async()=>{
            const res = await axios.get(backend()+'/admin/consola/'+id);
            setcelular(res.data);
        }

        const getProveedor = async()=>{
            const res = await axios.get(backend()+'/admin/proveedor/consola/'+id)
            setProveedor(res.data);
        }
        getcelular(); 
        getProveedor();
    }, celular);

    const capturarDatos = (e)=>{
        const {name, value} = e.target;
        setcelular({...celular, [name]: value});
    }

    const capturarProveedor = (e)=>{
        const {name, value} = e.target;
        setProveedor({...proveedor, [name]: value});
    }

    const actualizarDatos = async(e)=>{
        e.preventDefault();

        const img = document.getElementById('img');
        const data = new FormData();

        data.append("nombre", celular.nombre);
        data.append("modelo", celular.modelo);
        data.append("marca", celular.marca);
        data.append("mantenimiento", celular.mantenimiento);
        data.append("puerto", celular.puerto);
        data.append("humedad", celular.humedad); 
        data.append("sobrecalentamiento", celular.sobrecalentamiento);
        data.append("disco", celular.disco);
        data.append("red", celular.red);
        data.append("reacondicionamiento", celular.reacondicionamiento);
        const proveedorData = new FormData();

        proveedorData.append("mantenimiento", proveedor.mantenimiento);
        proveedorData.append("puerto", proveedor.puerto);
        proveedorData.append("humedad", proveedor.humedad);            
        proveedorData.append("sobrecalentamiento", proveedor.sobrecalentamiento);
        proveedorData.append("disco", proveedor.disco);
        proveedorData.append("red", proveedor.red);
        proveedorData.append("reacondicionamiento", proveedor.reacondicionamiento);
            

        if(img.value === ''){
        }else{
            data.append("img", img.files[0]);        
        }

        await axios.put(backend()+'/admin/consola/'+id, data);
        await axios.put(backend()+'/admin/proveedor/consola/'+id, proveedorData);
        alert("El registro '"+id+"' se ha actualizado.");
    }

    return (
        <div>
            <h1 className='text-center mb-3'>Actualizar Consola</h1>
            <Link className='btn btn-primary' to={'/admin/consola/lista'}>Lista Consola</Link>

            <form onSubmit={actualizarDatos}>
                <div class="form-row">

                    <div class="form-group col-md-6">
                        <label for="nombre">
                            nombre
                        </label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="nombre" 
                            placeholder="Nombre"
                            required

                            value={celular.nombre}
                            name='nombre'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="modelo">
                            modelo
                        </label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="modelo" 
                            placeholder="modelo"
                            required

                            value={celular.modelo}
                            name='modelo'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="marca">
                            marca
                        </label>

                       <select
                            id="marca" 
                            placeholder="Marca"
                            required

                            value={celular.marca}
                            name='marca'
                            onChange={capturarDatos}
                        >
                            {
                                aux.map(opc => {
                                    return <option>{opc.nombre}</option>
                                })
                            }
                       </select>
                    </div>

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

                            value={celular.mantenimiento}
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

                            value={celular.puerto}
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

                            value={celular.humedad}
                            name='humedad'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="sobrecalentamiento">
                            sobrecalentamiento
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="sobrecalentamiento" 
                            placeholder="sobrecalentamiento"
                            required

                            value={celular.sobrecalentamiento}
                            name='sobrecalentamiento'
                            onChange={capturarDatos}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="disco">
                            disco
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="disco" 
                            placeholder="disco"
                            required

                            value={celular.disco}
                            name='disco'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="red">
                            red
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="red" 
                            placeholder="red"
                            required

                            value={celular.red}
                            name='red'
                            onChange={capturarDatos}
                        />
                    </div>
                    
                    <div class="form-group col-md-6">
                        <label for="reacondicionamiento">
                            reacondicionamiento
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="reacondicionamiento" 
                            placeholder="reacondicionamiento"
                            required

                            value={celular.reacondicionamiento}
                            name='reacondicionamiento'
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
    <label for="sobrecalentamiento">
        sobrecalentamiento
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="sobrecalentamiento" 
        placeholder="sobrecalentamiento"
        required

        value={proveedor.sobrecalentamiento}
        name='sobrecalentamiento'
        onChange={capturarProveedor}
    />
</div>

<div class="form-group col-md-6">
    <label for="disco">
        disco
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="disco" 
        placeholder="disco"
        required

        value={proveedor.disco}
        name='disco'
        onChange={capturarProveedor}
    />
</div>
<div class="form-group col-md-6">
    <label for="red">
        red
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="red" 
        placeholder="red"
        required

        value={proveedor.red}
        name='red'
        onChange={capturarProveedor}
    />
</div>

<div class="form-group col-md-6">
    <label for="reacondicionamiento">
        reacondicionamiento
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="reacondicionamiento" 
        placeholder="reacondicionamiento"
        required

        value={proveedor.reacondicionamiento}
        name='reacondicionamiento'
        onChange={capturarProveedor}
    />
</div>

                    <button type="submit" class="btn btn-primary form-control mt-3">Actualizar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarConsola