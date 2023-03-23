import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend } from '../../../utils';

const CreadosEsteMes = () => {

    const date = new Date();
    const month = date.getMonth()+1;
    const year = date.getFullYear();

    const [usuarios, setUsuarios] = useState([]);
    const [mes, setMes] = useState([]);

    useEffect(()=>{
        const getUsuarios = async()=>{
            const res = await axios.get(backend()+'/api/usuario');
            setUsuarios(res.data);
        }
        getUsuarios();

        const aux = [];

        usuarios.map((u)=>{
            const f = u.createdAt.split('-')
            if((f[0]==year) && (f[1]==month)){
                aux.push(u);
            }
        });
        setMes(aux);

    }, [usuarios]);


    return (
        <div>
            <h1>Creados este mes</h1>
            {
                mes.map((u)=>{
                    return(<div>
                        <h2>ID: {u._id}</h2>
                        <h3>Nombre: {u.name}</h3>
                        <h3>Correo: {u.email}</h3>
                        <h3>Fecha de creacion: {u.createdAt}</h3>
                        <br/><br/>
                    </div>)
                })
            }
        </div>
    )
}

export default CreadosEsteMes