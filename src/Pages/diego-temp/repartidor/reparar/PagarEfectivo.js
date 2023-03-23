import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { backend } from '../../../../utils';

const PagarEfectivo = () => {

    var data = JSON.parse(localStorage.getItem("data"));
    const [cliente, setCliente] = useState({});

    let total = data.precio-(data.precio*(data.descuento/100));
    total += parseFloat(data.propina);

    let {producto, servicio, id} = useParams();

    useEffect(()=>{
        const getUser = async()=>{
            const res = await axios.get(backend()+'/api/usuario/'+data.cliente);
            setCliente(res.data);

        }
        getUser();

    }, cliente);

    const generarPedido = async()=>{

        const proveedor = await axios.get(backend()+'/admin/proveedor/'+producto+'/'+id);

        const formData = new FormData();

        formData.append('cliente', data.cliente);
        formData.append('producto', data.producto);
        formData.append('servicio', data.servicio);
        formData.append('precio', data.precio);
        formData.append('descuento', data.descuento);
        formData.append('telefono', data.telefono);
        formData.append('direccion', data.direccion);
        formData.append('rango', data.rango);
        formData.append('pago', data.pago);
        formData.append('reemplazo', data.reemplazo);
        formData.append('propina', data.propina);
        formData.append('proveedor', proveedor.data[servicio]);

        const respuesta = await axios.post(backend()+'/api/pedido', formData);

        const cotizacion = localStorage.getItem('cotizacion');
        await axios.put(backend()+'/api/cotizacion/'+cotizacion);


        if(data.cupon !== ''){
            const formData2 = new FormData();
            formData2.append('cliente', data.cliente);
            formData2.append('pedido', respuesta.data._id);
            formData2.append('cupon', data.cupon);
            
            await axios.post(backend()+'/api/descuento',formData2);
        }

        window.location.href = '/pedidos/status/'+respuesta.data._id;
    }

    return (
    <div>
        <h1>Pagar en Efectivo</h1>

        <h3>Pedido a nombre de {cliente.name}</h3>
        <h3>Se entregara en {data.direccion} en un rango {data.rango}</h3>
        <h3>Producto: {data.servicio} para {data.producto}</h3>

        <br/>
        <p>INFORMACION DEL PAGO Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex perspiciatis, recusandae incidunt obcaecati molestias quis enim libero voluptatum cum voluptates aut in hic omnis fuga, sapiente dicta pariatur asperiores, sint non distinctio tempora! Ipsum vero, non temporibus quo in, sed dicta enim at placeat dignissimos voluptatum dolorem asperiores ab ut?</p>
        <br/>

        <h3>Precio: ${data.precio} MNX</h3>
        <h3>Descuento: -{data.descuento}% (${  data.precio * data.descuento /100  } MNX)</h3>
        <h3>Propina: ${data.propina}</h3>
        <h2>TOTAL: $<big>{total}</big> MNX</h2>

        <button onClick={generarPedido}>Continuar</button>
    </div>
    )
}

export default PagarEfectivo