import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Status0 from '../../Components/diego-tmp/statusPedidos/Status0';
import Status1 from '../../Components/diego-tmp/statusPedidos/Status1';
import Status2 from '../../Components/diego-tmp/statusPedidos/Status2';
import Status3 from '../../Components/diego-tmp/statusPedidos/Status3';
import Status4 from '../../Components/diego-tmp/statusPedidos/Status4';
import Status5 from '../../Components/diego-tmp/statusPedidos/Status5';

import { backend } from '../../utils';

const StatusPedido = () => {

    const {id} = useParams();
    const [pedido, setPedido] = useState({});

    useEffect(()=>{
        const getPedido = async()=>{
            const res = await axios.get(backend()+'/api/pedido/'+id);
            setPedido(res.data);
        }
        getPedido();
    }, pedido);
    
    switch(pedido.status){
        case 0: return(<Status0/>);
        case 1: return(<Status1/>);
        case 2: return(<Status2/>);
        case 3: return(<Status3/>);
        case 4: return(<Status4/>);
        case 5: return(<Status5/>);
        default: break;
    }
}

export default StatusPedido