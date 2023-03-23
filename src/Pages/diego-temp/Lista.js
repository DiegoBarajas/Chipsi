import React from 'react';

import ListaCelular from '../../Components/diego-tmp/ListaCelular';
import ListaConsola from '../../Components/diego-tmp/ListaConsola';
import ListaControl from '../../Components/diego-tmp/ListaControl';
import ListaLaptop from '../../Components/diego-tmp/ListaLaptop';
import ListaPC from '../../Components/diego-tmp/ListaPC';
import ListaSmartwatch from '../../Components/diego-tmp/ListaSmartwatch';
import ListaTableta from '../../Components/diego-tmp/ListaTableta';


const Lista = () => {
  return (
    <div>
        <ListaCelular /> <br/><hr/><br/>
        <ListaPC /> <br/><hr/><br/>
        <ListaLaptop /> <br/><hr/><br/>
        <ListaConsola /> <br/><hr/><br/>
        <ListaControl /> <br/><hr/><br/>
        <ListaTableta /> <br/><hr/><br/>
        <ListaSmartwatch />
    </div>
  )
}

export default Lista