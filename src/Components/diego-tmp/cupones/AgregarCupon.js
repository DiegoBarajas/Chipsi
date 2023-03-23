import axios from 'axios';
import React, { useState } from 'react'
import { backend } from '../../../utils';

const AgregarCupon = () => {

    const valorInicial = {
        "nombre": '',
        "codigo": '',
        "descuento": 0,
        "automatico": false,
        "unico": false,
        "primera": false
    };

    const [cupon, setCupon] = useState(valorInicial);

    const capturarDatos = (e)=>{
        const {name, value} = e.target;
        setCupon({...cupon, [name]: value});
    }
    
    const capturarRadio = ()=>{
        const auto = document.getElementById('automatico').checked;
        const unico = document.getElementById('unico').checked;
        const primera = document.getElementById('primera').checked;


        setCupon({...cupon, 'automatico': auto, 'unico': unico, 'primera': primera});
    }

    const guardarDatos = async(e)=>{
        e.preventDefault();
        console.log(cupon);

        const data = new FormData();

        data.append("nombre", cupon.nombre);
        data.append("codigo", cupon.codigo);
        data.append("descuento", cupon.descuento);
        data.append("automatico", cupon.automatico);
        data.append("unico", cupon.unico);
        data.append("primera", cupon.primera);

        
        await axios.post(backend()+'/api/cupon', data);
        setCupon({...valorInicial});

    }

    return (
        <div>
            <h1>Agregar Cupon</h1>
            <form onSubmit={guardarDatos}>

                <div>
                    <label for="nombre">
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        id="nombre" 
                        placeholder="nombre"
                        required

                        value={cupon.nombre}
                        name='nombre'
                        onChange={capturarDatos}
                    />
                </div>

                <div>
                    <label for="codigo">
                        Codigo
                    </label>
                    <input 
                        type="text" 
                        id="codigo" 
                        placeholder="codigo"
                        required

                        value={cupon.codigo}
                        name='codigo'
                        onChange={capturarDatos}
                    />
                </div>

                <div>
                    <label for="descuento">
                        Descuento
                    </label>
                    <input 
                        type="number" 
                        id="descuento" 
                        placeholder="descuento"
                        required

                        value={cupon.descuento}
                        name='descuento'
                        onChange={capturarDatos}
                    />
                </div>

                <div>
                    <label for="automatico">
                        Se aplica automaticamente
                    </label>
                    <input 
                        type="checkbox" 
                        id="automatico" 
                        placeholder="automatico"

                        checked={cupon.automatico}
                        name='automatico'
                        onChange={capturarRadio}
                    />
                </div>

                <div>
                    <label for="unico">
                        De uso unico
                    </label>
                    <input 
                        type="checkbox" 
                        id="unico" 
                        placeholder="unico"

                        checked={cupon.unico}
                        name='unico'
                        onChange={capturarRadio}
                    />
                </div>

                <div>
                    <label for="primera">
                        Solo se puede usar la primera vez
                    </label>
                    <input 
                        type="checkbox" 
                        id="primera" 
                        placeholder="primera"

                        checked={cupon.primera}
                        name='primera'
                        onChange={capturarRadio}
                    />
                </div>

                <button type="submit">Agrgar Cupon</button>


            </form>
        </div>
    )
}

export default AgregarCupon