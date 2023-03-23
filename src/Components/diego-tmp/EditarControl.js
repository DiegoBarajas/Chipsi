import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend } from '../../utils';

const EditarControl = () => {

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
        if(obj[i].producto === "control"){
            aux.push(obj[i]);
        }
    }

    const [celular, setcelular] = useState({});
    const [proveedor, setProveedor] = useState({});

    useEffect(()=>{
        const getcelular = async()=>{
            const res = await axios.get(backend()+'/admin/control/'+id);
            setcelular(res.data);
        }

        const getProveedor = async()=>{
            const res = await axios.get(backend()+'/admin/proveedor/control/'+id)
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
        data.append("joystick", celular.joystick); 
        data.append("cruceta", celular.cruceta);
        data.append("boton", celular.boton);
        data.append("bumper", celular.bumper);
        data.append("gatillo", celular.gatillo);
        data.append("mantenimientoPre", celular.mantenimientoPre);
        data.append("mantenimientoCor", celular.mantenimientoCor);

        const proveedorData = new FormData();

        proveedorData.append("joystick", proveedor.joystick);
        proveedorData.append("cruceta", proveedor.cruceta);
        proveedorData.append("boton", proveedor.boton);
        proveedorData.append("bumper", proveedor.bumper); 
        proveedorData.append("gatillo", proveedor.gatillo); 
        proveedorData.append("mantenimientoPre", proveedor.mantenimientoPre);
        proveedorData.append("mantenimientoCor", proveedor.mantenimientoCor);
        
        if(img.value === ''){
        }else{
            data.append("img", img.files[0]);        
        }

        await axios.put(backend()+'/admin/control/'+id, data);
        await axios.put(backend()+'/admin/proveedor/control/'+id, proveedorData);

        alert("El registro '"+id+"' se ha actualizado.");
    }

    return (
        <div>
            <h1 className='text-center mb-3'>Actualizar control</h1>
            <Link className='btn btn-primary' to={'/admin/control/lista'}>Lista control</Link>

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
                        <label for="joystick">
                            joystick
                        </label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="joystick" 
                            placeholder="joystick"
                            required

                            value={celular.joystick}
                            name='joystick'
                            onChange={capturarDatos}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="cruceta">
                            cruceta
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="cruceta" 
                            placeholder="cruceta"
                            required

                            value={celular.cruceta}
                            name='cruceta'
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
                        <label for="bumper">
                            bumper
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="bumper" 
                            placeholder="bumper"
                            required

                            value={celular.bumper}
                            name='bumper'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="gatillo">
                            gatillo
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="gatillo" 
                            placeholder="gatillo"
                            required

                            value={celular.gatillo}
                            name='gatillo'
                            onChange={capturarDatos}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="mantenimientoPre">
                            mantenimientoPre
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="mantenimientoPre" 
                            placeholder="mantenimientoPre"
                            required

                            value={celular.mantenimientoPre}
                            name='mantenimientoPre'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="mantenimientoCor">
                            mantenimientoCor
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="mantenimientoCor" 
                            placeholder="mantenimientoCor"
                            required

                            value={celular.mantenimientoCor}
                            name='mantenimientoCor'
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
    <label for="joystick">
        joystick
    </label>
    <input 
        type="text" 
        class="form-control" 
        id="joystick" 
        placeholder="joystick"
        required

        value={proveedor.joystick}
        name='joystick'
        onChange={capturarProveedor}
    />
</div>

<div class="form-group col-md-6">
    <label for="cruceta">
        cruceta
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="cruceta" 
        placeholder="cruceta"
        required

        value={proveedor.cruceta}
        name='cruceta'
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
    <label for="bumper">
        bumper
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="bumper" 
        placeholder="bumper"
        required

        value={proveedor.bumper}
        name='bumper'
        onChange={capturarProveedor}
    />
</div>
<div class="form-group col-md-6">
    <label for="gatillo">
        gatillo
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="gatillo" 
        placeholder="gatillo"
        required

        value={proveedor.gatillo}
        name='gatillo'
        onChange={capturarProveedor}
    />
</div>

<div class="form-group col-md-6">
    <label for="mantenimientoPre">
        mantenimientoPre
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="mantenimientoPre" 
        placeholder="mantenimientoPre"
        required

        value={proveedor.mantenimientoPre}
        name='mantenimientoPre'
        onChange={capturarProveedor}
    />
</div>
<div class="form-group col-md-6">
    <label for="mantenimientoCor">
        mantenimientoCor
    </label>
    <input 
        type="number" 
        class="form-control" 
        id="mantenimientoCor" 
        placeholder="mantenimientoCor"
        required

        value={proveedor.mantenimientoCor}
        name='mantenimientoCor'
        onChange={capturarProveedor}
    />
</div>

                    <button type="submit" class="btn btn-primary form-control mt-3">Actualizar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarControl