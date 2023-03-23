import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { backend } from '../../utils';

const AgregarCelular = () => {

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
        if(obj[i].producto === "celular"){
            aux.push(obj[i]);
        }
    }

    const valorInicial = {
        "nombre": "",
        "modelo": "", 
        "marca": "", 

        "display": 0, 
        "bateria": 0, 
        "boton": 0, 
        "tapa": 0, 
        "camaraF": 0, 
        "camaraP": 0, 
        "sistema": 0, 
        "carga": 0, 
        "bocina": 0, 
        "altavoz": 0, 
        "logica": 0, 
        "microfono": 0,
        "reacondicionamiento": 0
    };

    const proveedorInicial = {
        id_producto: '',
        display: 0,
        bateria: 0,
        boton: 0,
        tapa: 0,
        camaraF: 0,
        camaraP: 0,
        sistema: 0,
        carga: 0,
        bocina: 0,
        altavoz: 0,
        logica: 0,
        microfono: 0,
        reacondicionamiento: 0
    }

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
            data.append("display", celular.display);
            data.append("bateria", celular.bateria);
            data.append("boton", celular.boton);
            data.append("tapa", celular.tapa);
            data.append("camaraF", celular.camaraF);
            data.append("camaraP", celular.camaraP);
            data.append("sistema", celular.sistema);
            data.append("carga", celular.carga);
            data.append("bocina", celular.bocina);
            data.append("altavoz", celular.altavoz);
            data.append("logica", celular.logica);
            data.append("microfono", celular.microfono);
            data.append("reacondicionamiento", celular.reacondicionamiento);

            const res = await axios.post(backend()+'/admin/celular', data);
            
            const proveedorData = new FormData();

            proveedorData.append('id_producto', res.data.id_producto);
            proveedorData.append('display', proveedor.display);
            proveedorData.append('bateria', proveedor.bateria);
            proveedorData.append('boton', proveedor.boton);
            proveedorData.append('tapa', proveedor.tapa);
            proveedorData.append('camaraF', proveedor.camaraF);
            proveedorData.append('camaraP', proveedor.camaraP);
            proveedorData.append('sistema', proveedor.sistema);
            proveedorData.append('carga', proveedor.carga);
            proveedorData.append('bocina', proveedor.bocina);
            proveedorData.append('altavoz', proveedor.altavoz);
            proveedorData.append('logica', proveedor.logica);
            proveedorData.append('microfono', proveedor.microfono);
            proveedorData.append('reacondicionamiento', proveedor.reacondicionamiento);

            await axios.post(backend()+'/admin/proveedor/celular', proveedorData);
            
            setCelular({...valorInicial});
            setProveedor({...proveedorInicial});
        }
    }

    return (
        <div>
            <h1 className='text-center mb-3'>Agregar Celular</h1>
            <Link className='btn btn-primary' to={'/admin/celular/lista'}>Lista Celular</Link>

            <form onSubmit={guardarDatos} encType='multipart/form-data'>
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
                            display
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="display" 
                            placeholder="display"
                            required

                            value={celular.display}
                            name='display'
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
                        <label for="tapa">
                            tapa
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="tapa" 
                            placeholder="tapa"
                            required

                            value={celular.tapa}
                            name='tapa'
                            onChange={capturarDatos}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="camaraF">
                            camara frontal
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="camaraF" 
                            placeholder="camaraF"
                            required

                            value={celular.camaraF}
                            name='camaraF'
                            onChange={capturarDatos}
                        />
                    </div>


                    <div class="form-group col-md-6">
                        <label for="camaraP">
                            camara principal
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="camaraP" 
                            placeholder="camaraP"
                            required

                            value={celular.camaraP}
                            name='camaraP'
                            onChange={capturarDatos}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="sistema">
                            sistema
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="sistema" 
                            placeholder="sistema"
                            required

                            value={celular.sistema}
                            name='sistema'
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
                        <label for="bocina">
                            bocina
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="bocina" 
                            placeholder="bocina"
                            required

                            value={celular.bocina}
                            name='bocina'
                            onChange={capturarDatos}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="altavoz">
                            altavoz
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="altavoz" 
                            placeholder="altavoz"
                            required

                            value={celular.altavoz}
                            name='altavoz'
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
                        <label for="microfono">
                            microfono
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="microfono" 
                            placeholder="microfono"
                            required

                            value={celular.microfono}
                            name='microfono'
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
                        <label for="display">
                            display
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="display" 
                            placeholder="display"
                            required

                            value={proveedor.display}
                            name='display'
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
                        <label for="tapa">
                            tapa
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="tapa" 
                            placeholder="tapa"
                            required

                            value={proveedor.tapa}
                            name='tapa'
                            onChange={capturarProveedor}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="camaraF">
                            camara frontal
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="camaraF" 
                            placeholder="camaraF"
                            required

                            value={proveedor.camaraF}
                            name='camaraF'
                            onChange={capturarProveedor}
                        />
                    </div>


                    <div class="form-group col-md-6">
                        <label for="camaraP">
                            camara principal
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="camaraP" 
                            placeholder="camaraP"
                            required

                            value={proveedor.camaraP}
                            name='camaraP'
                            onChange={capturarProveedor}
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="sistema">
                            sistema
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="sistema" 
                            placeholder="sistema"
                            required

                            value={proveedor.sistema}
                            name='sistema'
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
                        <label for="bocina">
                            bocina
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="bocina" 
                            placeholder="bocina"
                            required

                            value={proveedor.bocina}
                            name='bocina'
                            onChange={capturarProveedor}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="altavoz">
                            altavoz
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="altavoz" 
                            placeholder="altavoz"
                            required

                            value={proveedor.altavoz}
                            name='altavoz'
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
                        <label for="microfono">
                            microfono
                        </label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="microfono" 
                            placeholder="microfono"
                            required

                            value={proveedor.microfono}
                            name='microfono'
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

export default AgregarCelular