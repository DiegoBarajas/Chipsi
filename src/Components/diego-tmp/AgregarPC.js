import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { backend } from '../../utils';

const AgregarPC = () => {

    const valorInicial = {
        "mantenimiento": 0,
        "puerto": 0,
        "humedad": 0,
        "mejoraDisco": 0,
        "mejoraRam": 0
    };

    const proveedorInicial = {        
        "id_producto": '', 

        "mantenimiento": 0,
        "puerto": 0,
        "humedad": 0,
        "mejoraDisco": 0,
        "mejoraRam": 0
    };

    const [PC, setPC] = useState(valorInicial);
    const [proveedor, setProveedor] = useState(proveedorInicial);

    const capturarDatos = (e)=>{
        const {name, value} = e.target;
        setPC({...PC, [name]: value});
    }

    const capturarProveedor = (e)=>{
        const {name, value} = e.target;
        setProveedor({...proveedor, [name]: value});
    }

    const guardarDatos = async(e)=>{
        e.preventDefault();
        console.log(PC);

        const img = document.getElementById('img');
        const data = new FormData();

        data.append('img', img.files[0]);

        data.append("mantenimiento", PC.mantenimiento);
        data.append("puerto", PC.puerto);
        data.append("humedad", PC.humedad);
        data.append("mejoraDisco", PC.mejoraDisco);
        data.append("mejoraRam", PC.mejoraRam);
        
        const res = await axios.post(backend()+'/admin/PC', data);

        const proveedorData = new FormData();

        proveedorData.append('id_producto', res.data.id_producto);
        proveedorData.append("mantenimiento", proveedor.mantenimiento);
        proveedorData.append("puerto", proveedor.puerto);
        proveedorData.append("humedad", proveedor.humedad);
        proveedorData.append("mejoraDisco", proveedor.mejoraDisco);
        proveedorData.append("mejoraRam", proveedor.mejoraRam);
        
        await axios.post(backend()+'/admin/proveedor/pc', proveedorData);

        setPC({...valorInicial});
        setProveedor({...proveedorInicial});

    }

    return (
        <div>
            <h1 className='text-center mb-3'>Agregar PC</h1>
            <Link className='btn btn-primary' to={'/admin/pc/lista'}>Lista PC</Link>

            <form onSubmit={guardarDatos}>
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

                            value={PC.mantenimiento}
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

                            value={PC.puerto}
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

                            value={PC.humedad}
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

                            value={PC.mejoraDisco}
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

                            value={PC.mejoraRam}
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

                    <button type="submit" class="btn btn-primary form-control mt-3">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default AgregarPC