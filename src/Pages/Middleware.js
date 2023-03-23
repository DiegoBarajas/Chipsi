import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Store } from '../Store';
import { backend } from '../utils';

const Middleware = () => {

    let {producto, servicio, marca, id} = useParams();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const chi = async()=>{
        let obj = {};

        const res = await axios.get(backend()+'/admin/'+producto+"/"+id);
        obj = await res.data;

        let cotizacion;

        let cliente;
        if(userInfo == null){
            cliente = 'No registrado';
        }else{
            cliente = userInfo._id;
        }

        const formData = new FormData();
        formData.append('cliente', cliente);
        formData.append('producto', producto);
        formData.append('servicio', servicio);
        formData.append('id_producto', id);
        formData.append('nombre_producto', obj.nombre);
        formData.append('marca', marca);

        
        const respuesta = await axios.post(backend()+'/api/cotizacion', formData);
        cotizacion = await respuesta.data._id;

        const ref = window.location.href.split('/');
        let dire = '';
        for(let i=0; i<ref.length-1; i++){
            dire = dire+ref[i]+'/';
        }

        localStorage.setItem('cotizacion', cotizacion);

        window.location.href = dire;
    }

    chi();


    return (
        <div>
        </div>
        
    )
}

export default Middleware