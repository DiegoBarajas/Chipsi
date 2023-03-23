import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../Store';
import { backend } from '../utils';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Cartera = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [usuario, setUsuario] = useState({});
    useEffect(()=>{
        const getUsaurio = async()=>{
            const res = await axios.get(backend()+'/api/usuario/'+userInfo._id);
            setUsuario(res.data);
        }

        getUsaurio();
    }, usuario);

    const [descuentos, setDescuentos] = useState([]);
    useEffect(()=>{
        const getDescuentos = async()=>{
            const res = await axios.get(backend()+'/api/descuento');
            const desc = res.data;
            const aux = [];

            desc.map((d)=>{
                if(d.cupon == usuario.codigo){
                    aux.push(d);
                }
            })

            setDescuentos(aux);
        }

        getDescuentos();
    }, [descuentos]);

    return (
        <div>
            <h1>Mi cartera</h1>
            <h3>Mi dinero actual: ${usuario.cartera} MXN</h3>
            <br/>
            <h1>Mi cupon: {usuario.codigo}</h1>

            <CopyToClipboard text={usuario.codigo}>
                <button>Copiar en el portapapeles</button>
            </CopyToClipboard>

            <br/><br/>
            {
                descuentos.map((d)=>{
                    return(
                        <div>
                            <p>Usado el {d.createdAt.split('T')[0]} a las {d.createdAt.split('T')[1].split('.')[0]}</p>
                            <br/><br/>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default Cartera