import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { backend } from '../../utils';

const AgregarLaptop = () => {

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
        if(obj[i].producto === "laptop"){
            aux.push(obj[i]);
        }
    }

    const valorInicial = {
        "nombre": "", 
        "marca": "", 
        "modelo": "",

        "mantenimiento": 0, 
        "puerto": 0, 
        "humedad": 0, 
        "pantalla": 0, 
        "teclado": 0, 
        "trackpad": 0, 
        "boton": 0, 
        "cargador": 0, 
        "red": 0, 
        "bateria": 0,
        "reacondicionamiento": 0
    };

    const proveedorInicial = {
        "id_producto": '', 

        "mantenimiento": 0, 
        "puerto": 0, 
        "humedad": 0, 
        "pantalla": 0, 
        "teclado": 0, 
        "trackpad": 0, 
        "boton": 0, 
        "cargador": 0, 
        "red": 0, 
        "bateria": 0,
        "reacondicionamiento": 0
    };

    const [celular, setCelular] = useState(valorInicial);
    const [proveedor, setProveedor] = useState(proveedorInicial);

    const capturarDatos = (e)=>{
        const {name, value} = e.target;
        setCelular({...celular, [name]: value});
    }

    const capturarProveedor = (e)=>{
        const {name, value} = e.target;
        setProveedor({...proveedor, [name]: value});
    }

    const capturarLista = (e)=>{
        if(document.getElementById('marca').value === '---Elige Una Opcion---'){
            alert("Debes elegir una marca");
        }else{
            capturarDatos(e);
        }
    }

    const guardarDatos = async(e)=>{
        e.preventDefault();
        
        if(document.getElementById('marca').value === '---Elige Una Opcion---'){
            alert("Debes elegir una marca");
        }else{

            const img = document.getElementById('img');
            const data = new FormData();

            data.append('img', img.files[0]);

            data.append("nombre", celular.nombre);
            data.append("modelo", celular.modelo); 
            data.append("marca", celular.marca);
            data.append("mantenimiento", celular.mantenimiento);
            data.append("puerto", celular.puerto);
            data.append("humedad", celular.humedad);
            data.append("pantalla", celular.pantalla); 
            data.append("teclado", celular.teclado);
            data.append("trackpad", celular.trackpad);
            data.append("boton", celular.boton);
            data.append("cargador", celular.cargador);
            data.append("red", celular.red);
            data.append("bateria", celular.bateria);
            data.append("reacondicionamiento", celular.reacondicionamiento);
            
            const res = await axios.post(backend()+'/admin/laptop', data);

            const proveedorData = new FormData();

            proveedorData.append('id_producto', res.data.id_producto);
            proveedorData.append("mantenimiento", proveedor.mantenimiento);
            proveedorData.append("puerto", proveedor.puerto);
            proveedorData.append("humedad", proveedor.humedad);
            proveedorData.append("pantalla", proveedor.pantalla); 
            proveedorData.append("teclado", proveedor.teclado);
            proveedorData.append("trackpad", proveedor.trackpad);
            proveedorData.append("boton", proveedor.boton);
            proveedorData.append("cargador", proveedor.cargador);
            proveedorData.append("red", proveedor.red);
            proveedorData.append("bateria", proveedor.bateria);
            proveedorData.append("reacondicionamiento", proveedor.reacondicionamiento);
            
            await axios.post(backend()+'/admin/proveedor/laptop', proveedorData);

            setCelular({...valorInicial});
            setProveedor({...proveedorInicial});

        }
    }

    return (
        <div>
            <h1 className='text-center mb-3'>Agregar Laptop</h1>
            <Link className='btn btn-primary' to={'/admin/laptop/lista'}>Lista Laptop</Link>

            <form onSubmit={guardarDatos}>
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
                    </div><div class="form-group col-md-6">
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
                            onChange={capturarLista}
                        >
                            <option>---Elige Una Opcion---</option>
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
                        <label for="pantalla">
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
                        <label for="teclado">
                            teclado
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="teclado" 
                            placeholder="teclado"
                            required

                            value={celular.teclado}
                            name='teclado'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="trackpad">
                            trackpad
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="trackpad" 
                            placeholder="trackpad"
                            required

                            value={celular.trackpad}
                            name='trackpad'
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
                        <label for="cargador">
                            cargador
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="cargador" 
                            placeholder="cargador"
                            required

                            value={celular.cargador}
                            name='cargador'
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
                            required

                            name='img'
                            onChange={()=>{}}
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
                        <label for="pantalla">
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
                        <label for="teclado">
                            teclado
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="teclado" 
                            placeholder="teclado"
                            required

                            value={proveedor.teclado}
                            name='teclado'
                            onChange={capturarProveedor}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="trackpad">
                            trackpad
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="trackpad" 
                            placeholder="trackpad"
                            required

                            value={proveedor.trackpad}
                            name='trackpad'
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
                        <label for="cargador">
                            cargador
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="cargador" 
                            placeholder="cargador"
                            required

                            value={proveedor.cargador}
                            name='cargador'
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

                    <button type="submit" class="btn btn-primary form-control mt-3">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default AgregarLaptop