import React, { useContext, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const PedirDireccion = () => {
    const [value, setValue] = useState(null);

    const agregarDireccion = async(e)=>{
        e.preventDefault();

        if(value==null){
            alert('Debes escribir tu direccion')
        }else if(value!=null){
           
        

            const numInt = document.getElementById('numInt').value;
            
            let dir;

            if(numInt !== ''){
                dir = value.label+'. Número interior: '+numInt;
            }else{
                dir = value.label;
            }
            
            const json = {
                direccion: dir,
                url: document.referrer
            }

            localStorage.setItem('data', JSON.stringify(json));
            window.location.href = '/usuario/agregarRango';
        }
    }

    return (
        <div>
            <h1>Antes de continuar con tu pedido...</h1>
            <h2>Paso 1: Agrega tu direccion</h2>
            
            <form onSubmit={agregarDireccion}>

            <div>
                
                    <GooglePlacesAutocomplete
                        apiKey="AIzaSyAaUx_aCkO9oFwtxwYFAxtrnB1scgfrx4Y"
                        apiOptions={{ language: 'es', region: 'mx' }}
                        selectProps={{
                            value,
                            onChange: setValue,
                            placeholder: "Escribe tu dirección"
                        }}
                    />
                </div>
                
                <div>
                    <label for='numInt'>
                        Numero Interior (Opcional)
                    </label>
                    <input
                        id='numInt'
                        type='text'
                        placeholder='Escribe el numero interior'

                    />
                </div>

                

                <button>
                    Continuar
                </button>
            </form>
        </div>
    ) 
}

export default PedirDireccion