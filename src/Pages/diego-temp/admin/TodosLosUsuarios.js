import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend } from '../../../utils';

const TodosLosUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(()=>{
        const getUsuarios = async()=>{
            const res = await axios.get(backend()+'/api/usuario');
            setUsuarios(res.data);
        }
        getUsuarios();
    }, [usuarios]);

    return (
        <div>
            <h1>Todos los usuarios</h1>
            {
                usuarios.map((u)=>{
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

export default TodosLosUsuarios