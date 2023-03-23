import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { backend } from '../../../utils';

const AgregarMarca = () => {

    const valorInicial = {
        "nombre": "",
        "producto": "celular"
    };

    const [PC, setPC] = useState(valorInicial);

    const capturarDatos = (e)=>{
        const {name, value} = e.target;
        setPC({...PC, [name]: value});
    }

    const postDetails = async(e)=>{
        e.preventDefault();

        const img = document.getElementById('img');

        const data = new FormData();
        data.append('img', img.files[0]);
        data.append('nombre', PC.nombre);
        data.append('producto', PC.producto);

        await axios.post(backend()+'/admin/marca', data);
        setPC({...valorInicial});

    }

    const guardarDatos = async(e)=>{
        e.preventDefault();
        console.log(PC);

        const newPC = {
            "nombre": PC.nombre,
            "producto": PC.producto
        }
        await axios.post(backend()+'/admin/marca', newPC);

        setPC({...valorInicial});
    }

    return (
        <div>
            <h1 className='text-center mb-3'>Agregar Marca</h1>
            <Link className='btn btn-primary' to={'/admin/marca/lista'}>Lista Marca</Link>

            <form onSubmit={postDetails}>
                <div class="form-row">

                    <div class="form-group col-md-6">
                        <label for="nombre">
                            nombre
                        </label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="nombre" 
                            placeholder="nombre"
                            required

                            value={PC.nombre}
                            name='nombre'
                            onChange={capturarDatos}
                        />
                    </div>

                    <div class="form-group">
                        <label for="producto">Producto</label>
                        <select 
                            class="form-control" 
                            id="producto"
                        
                            value={PC.producto}
                            name='producto'
                            onChange={capturarDatos}
                            required
                        >
                            <option>celular</option>
                            <option>laptop</option>
                            <option>consola</option>
                            <option>control</option>
                            <option>tableta</option>
                            <option>smartwatch</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="nombre">
                            nombre
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

                    <button type="submit" class="btn btn-primary form-control mt-3">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default AgregarMarca