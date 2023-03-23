import axios from 'axios';
import React, { useState } from 'react'
import { backend } from '../../../../utils';
import { PayNow, loadStripe } from 'react-stripe-js';
import { useParams } from 'react-router-dom';


const PayButtonComp = () => {
    const stripe = loadStripe("pk_test_51MOat8HpB5odAi2nvrcei3GiBtSaCl3ULtG2SX0wYygIHzf8n2jvChmSJ8oOn8MYuDm0SGJf3InZp0XBRxoPR0Vw00rZVYhdji");
    const [clientSecret, setClientSecret] = useState("");

    let {producto, servicio, id} = useParams();

    var data = JSON.parse(localStorage.getItem("data"));
    let total = data.precio-(data.precio*(data.descuento/100));
    total += parseFloat(data.propina);


    const createPaymentIntent = async(amount) => {

        const formData = new FormData();
        formData.append('amount', amount);

        const resp = await axios.post(backend()+'/create-payment-intent', formData);
        await setClientSecret(resp.data.clientSecret);

    }

    const pagado = async()=>{
        const date = new Date();
        const hora = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        const fecha = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

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
        formData.append('fecha', fecha);
        formData.append('hora', hora);
        formData.append('pago', data.pago);
        formData.append('reemplazo', data.reemplazo);
        formData.append('propina', data.propina);
        formData.append('proveedor', proveedor.data[servicio]);

        const respuesta = await axios.post(backend()+'/api/pedido', formData);
        const cotizacion = localStorage.getItem('cotizacion');
        
        await axios.put(backend()+'/api/cotizacion/'+cotizacion);const formData2 = new FormData();
        formData2.append('cliente', data.cliente);
        formData2.append('pedido', respuesta.data._id);
        formData2.append('cupon', data.cupon);
        
        await axios.post(backend()+'/api/descuento',formData2);

        window.location.href = '/pedidos/status/'+respuesta.data._id;
    }

    return (
        <div>
            <h3>Total a pagar: ${total} MXN</h3>
            <p>(Si haz pulsado el boton y no aparece el formulario, espera un momento)</p>
            <br/><br/><br/>
            <PayNow
                title='Haz click aqui para proceder al pago'
                successMessage='Pago realizado exitosamente, espere un momento...'
                stripe={stripe}
                clientSecret={clientSecret}
                onClick={() => {
                    //other input field validation (like name,shipping address,etc)
                    //if all field are valid then return true otherwise return false
                    createPaymentIntent(total)
                }}
                onPaymentSuccess={pagado}
            />
        </div>
    )
}

export default PayButtonComp