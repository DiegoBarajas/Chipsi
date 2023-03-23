import axios from 'axios';
import React, { useContext } from 'react'
import { Store } from '../../Store';
import { backend } from '../../utils';


const PedirCP = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;
    const data = JSON.parse(localStorage.getItem('data'));

    const comprobar = ()=>{
        
        const rang1 = document.getElementById('rang1').value;
        const rang2 = document.getElementById('rang2').value;
        const btn = document.getElementById('btn');

        if((rang1 === '') || (rang2 === '')){
            btn.disabled = true;    
        }else if((rang1 !== '') && (rang2 !== '')){
            btn.disabled = false;    
        }
    }

    const agregarRango = async(e)=>{
        e.preventDefault();

        const rang1 = document.getElementById('rang1').value;
        const rang2 = document.getElementById('rang2').value;
        
        const rango = 'de '+rang1+' a '+rang2;
        
        const formData = new FormData();
        formData.append('id', userInfo._id);
        formData.append('direccion', data.direccion);
        formData.append('rango', rango);

        await axios.put(backend()+'/api/usuario/direccion', formData);
        
       window.location.href = data.url;
    }

    return (
        <div>
            <h2>Paso 2: Dinos a que hora podemos encontrarte</h2>


            

            <form onSubmit={agregarRango}>
                <div>
                    <label for='telefono'>
                        Rango de horas en las que podemos encontrarte
                    </label>
                    <input
                        id='rang1'
                        type='time'
                        placeholder='De'
                        required

                        onChange={comprobar}
                    />
                    <input
                        id='rang2'
                        type='time'
                        placeholder='a'
                        required

                        onChange={comprobar}
                    />
                </div>

                    <button 
                        id='btn'
                        disabled
                    >
                        Agregar Rango
                    </button>
            </form>
        </div>
    )
}

export default PedirCP