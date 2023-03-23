import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { backend } from '../../utils';

const AgregarSmartwatch = () => {

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

    const valorInicial = {
        "nombre": "", 
        "marca": "", 
        "modelo": "",

        "pantalla": 0, 
        "boton": 0, 
        "carga": 0, 
        "bateria": 0, 
        "logica": 0, 
        "humedad": 0
    };

    const proveedorInicial = {
        "id_producto": '', 

        "pantalla": 0, 
        "boton": 0, 
        "carga": 0, 
        "bateria": 0, 
        "logica": 0, 
        "humedad": 0
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
            data.append("marca", celular.marca);
            data.append("modelo", celular.modelo);
            data.append("pantalla", celular.pantalla);
            data.append("boton", celular.boton);
            data.append("carga", celular.carga);
            data.append("bateria", celular.bateria); 
            data.append("logica", celular.logica);
            data.append("humedad", celular.humedad);
            
            const res = await axios.post(backend()+'/admin/smartwatch', data);

            const proveedorData = new FormData();

            proveedorData.append('id_producto', res.data.id_producto);
            proveedorData.append("pantalla", proveedor.pantalla);
            proveedorData.append("boton", proveedor.boton);
            proveedorData.append("carga", proveedor.carga);
            proveedorData.append("bateria", proveedor.bateria); 
            proveedorData.append("logica", proveedor.logica);
            proveedorData.append("humedad", proveedor.humedad);
            
            await axios.post(backend()+'/admin/proveedor/smartwatch', proveedorData);

            setCelular({...valorInicial});
            setProveedor({...proveedorInicial});

        }
    }

    return (
        <div>
            <h1 className='text-center mb-3'>Agregar smartwatch</h1>
            <Link className='btn btn-primary' to={'/admin/smartwatch/lista'}>Lista smartwatch</Link>

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
                            required

                            name='img'
                            onChange={()=>{}}
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

                    <button type="submit" class="btn btn-primary form-control mt-3">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default AgregarSmartwatch