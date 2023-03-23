import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend } from '../../utils';

const EditarSmartwatch = () => {

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
        if(obj[i].producto === "smartwatch"){
            aux.push(obj[i]);
        }
    }

    const [celular, setcelular] = useState({});
    const [proveedor, setProveedor] = useState({});

    useEffect(()=>{
        const getcelular = async()=>{
            const res = await axios.get(backend()+'/admin/smartwatch/'+id);
            setcelular(res.data);
        }

        const getProveedor = async()=>{
            const res = await axios.get(backend()+'/admin/proveedor/smartwatch/'+id)
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


        data.append("nombre",  celular.nombre);
        data.append("modelo",  celular.modelo);
        data.append("marca",  celular.marca);
        data.append("pantalla",  celular.pantalla);
        data.append("boton",  celular.boton);
        data.append("carga",  celular.carga);
        data.append("bateria",  celular.bateria);
        data.append("logica",  celular.logica);
        data.append("humedad",  celular.humedad);
        
        const proveedorData = new FormData();

        proveedorData.append("pantalla", proveedor.pantalla);
        proveedorData.append("boton", proveedor.boton);
        proveedorData.append("carga", proveedor.carga);
        proveedorData.append("bateria", proveedor.bateria); 
        proveedorData.append("logica", proveedor.logica);
        proveedorData.append("humedad", proveedor.humedad);
        

        if(img.value === ''){
        }else{
            data.append("img", img.files[0]);        
        }

        await axios.put(backend()+'/admin/smartwatch/'+id, data);
        await axios.put(backend()+'/admin/proveedor/smartwatch/'+id, proveedorData);
        
        alert("El registro '"+id+"' se ha actualizado.");
    }

    return (
        <div>
            <h1 className='text-center mb-3'>Actualizar smartwatch</h1>
            <Link className='btn btn-primary' to={'/admin/smartwatch/lista'}>Lista smartwatch</Link>

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
                        <label for="display">
                            pantalla
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="pantalla" 
                            placeholder="pantalla"
                            required

                            value={celular.pantalla}
                            name='pantalla'
                            onChange={capturarDatos}
                        />
                    </div>
                    
                    <div class="form-group col-md-6">
                        <label for="boton">
                            boton
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="boton" 
                            placeholder="boton"
                            required

                            value={celular.boton}
                            name='boton'
                            onChange={capturarDatos}
                        />
                    </div>
                    
                    <div class="form-group col-md-6">
                        <label for="carga">
                            carga
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="carga" 
                            placeholder="carga"
                            required

                            value={celular.carga}
                            name='carga'
                            onChange={capturarDatos}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="bateria">
                            bateria
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="bateria" 
                            placeholder="bateria"
                            required

                            value={celular.bateria}
                            name='bateria'
                            onChange={capturarDatos}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="logica">
                            logica
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="logica" 
                            placeholder="logica"
                            required

                            value={celular.logica}
                            name='logica'
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
                            placeholder="sishumedadtema"
                            required

                            value={celular.humedad}
                            name='humedad'
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
    <label for="display">
        pantalla
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="pantalla" 
        placeholder="pantalla"
        required

        value={proveedor.pantalla}
        name='pantalla'
        onChange={capturarProveedor}
    />
</div>

<div class="form-group col-md-6">
    <label for="boton">
        boton
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="boton" 
        placeholder="boton"
        required

        value={proveedor.boton}
        name='boton'
        onChange={capturarProveedor}
    />
</div>

<div class="form-group col-md-6">
    <label for="carga">
        carga
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="carga" 
        placeholder="carga"
        required

        value={proveedor.carga}
        name='carga'
        onChange={capturarProveedor}
    />
</div>

<div class="form-group col-md-6">
    <label for="bateria">
        bateria
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="bateria" 
        placeholder="bateria"
        required

        value={proveedor.bateria}
        name='bateria'
        onChange={capturarProveedor}
    />
</div>

<div class="form-group col-md-6">
    <label for="logica">
        logica
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="logica" 
        placeholder="logica"
        required

        value={proveedor.logica}
        name='logica'
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
        placeholder="sishumedadtema"
        required

        value={proveedor.humedad}
        name='humedad'
        onChange={capturarProveedor}
    />
</div>

                    <button type="submit" class="btn btn-primary form-control mt-3">Actualizar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarSmartwatch