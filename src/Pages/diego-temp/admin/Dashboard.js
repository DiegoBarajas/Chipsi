import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { backend } from '../../../utils'
import MarcaMasCotizada from './MarcaMasCotizada';
import ProductosMasCotizados from './ProductosMasCotizados';
import ProductosMasPedidos from './ProductosMasPedidos';

const Dashboard = () => {

    const date = new Date();
    const mes = date.getMonth()+1;
    const año = date.getFullYear();
    const fechaHoy = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

    const [repHoy, setRepHoy] = useState(0);
    const [repMom, setRepMom] = useState(0);
    const [pend0, setPend0] = useState(0);
    const [pend1, setPend1] = useState(0);
    
    const [reparaciones, setReparaciones] = useState([]);
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const [brutos, setBrutos] = useState(0);
    const [brutosMes, setBrutosMes] = useState(0);
    const [netos, setNetos] = useState(0);

    useEffect(()=>{
      const getReparaciones = async()=>{
          const res = await axios.get(backend()+'/api/pedido');
          setReparaciones(res.data);
      }
      getReparaciones();

      let m=0, h=0, p0=0, p1=0, bruto=0, neto=0, brutoMes=0;

      reparaciones.map(rep => {
          //Al momento
          const f = rep.fecha.split('/');
          if((f[1] == mes) && (f[2] == año)){
              brutoMes+=rep.total;
              m++;
          }

          //Hoy
          if(rep.fecha === fechaHoy){
            h++;
            bruto+=rep.total;
            neto+=(rep.total-rep.propina-rep.proveedor);
          }

          //Pendientes 0
          if(rep.status === 0){
            p0++;
          }

          //Pendientes 1
          if(rep.status === 1){
            p1++;
          }
      });

      setRepMom(m);
      setRepHoy(h);
      setPend0(p0);
      setPend1(p1);

      setNetos(neto);
      setBrutos(bruto);
      setBrutosMes(brutoMes);

    }, [reparaciones]);


    const [cotizaciones, setCotizaciones] = useState([]);
    const [cotiMes, setCotiMes] = useState([]);
    const [cotiHoy, setCotiHoy] = useState([]);

    useEffect(()=>{
      const getCotizaciones = async()=>{
        const res = await axios.get(backend()+'/api/cotizacion');
        setCotizaciones(res.data);
      }
      getCotizaciones();

      const aux = [];
      const auxHoy = [];
      cotizaciones.map((c)=>{
        const fexa = c.fecha.split('/');
        
        if((mes == fexa[1]) && (año == fexa[2])){
          aux.push(c);
        }

        if(fechaHoy == c.fecha){
          auxHoy.push(c);
        }
      });

      setCotiMes(aux);
      setCotiHoy(auxHoy);

    }, [cotizaciones]);


    const [usuarios, setUsuarios] = useState([]);
    const [month, setMonth] = useState([]);
    const [nuevos, setNuevos] = useState([]);
    const [antiguos, setAntiguos] = useState([]);

    useEffect(()=>{
      const getUsuarios = async()=>{
          const res = await axios.get(backend()+'/api/usuario');
          setUsuarios(res.data);
      }
      getUsuarios();

      const aux = [];
      const n = [];
      const a = [];

      usuarios.map((u)=>{
          const f = u.createdAt.split('-')
          if((f[0]==año) && (f[1]==mes)){
              aux.push(u);
              n.push(u);
          }else{
            a.push(u);
          }

      });
      setMonth(aux);
      setNuevos(n);
      setAntiguos(a);

    }, [usuarios]);

    const [nue, setNue] = useState(0);
    const [ant, setAnt] = useState(0);

    useEffect(()=>{
      
      let a = [];
      let n = [];
      
      reparaciones.map(r=>{
        for(let i=0 ; i<nuevos.length ; i++){
          if(nuevos[i]._id == r.cliente){
            n.push(nuevos[i]._id);
          }
        }

        for(let i=0 ; i<antiguos.length ; i++){
          if(antiguos[i]._id == r.cliente){
            a.push(antiguos[i]._id);
          }
        }
      })

      a = [...new Set(a)]
      n = [...new Set(n)]
      setNue(n);
      setAnt(a);

      console.log(ant);
    });
    

    return (
      <div>
          <h1>Dashboard</h1><br/><br/>

          <Link to='/admin/lista'>Lista de dispositivos</Link>

          <h2>R E P A R A C I O N E S</h2>

          <div>
            <h3>Reparaciones de hoy ({fechaHoy}) : {repHoy} <Link to={'/admin/dashboard/reparaciones/hoy'}>+</Link> </h3>
          </div>

          <div>
            <h3>Cotizaciones de hoy ({fechaHoy}) : {cotiHoy.length} <Link to={'/admin/dashboard/cotizaciones/hoy'}>+</Link> </h3>
          </div>

          <div>
            <h3>Reparaciones de este mes ({meses[mes-1]} del {año}) : {repMom} <Link to={'/admin/dashboard/reparaciones/al-momento'}>+</Link> </h3>
          </div>

          <div>
            <h3>Cotizaciones de este mes ({meses[mes-1]} del {año}) : {cotiMes.length} ( {Math.floor((cotiMes.length*100)/cotizaciones.length)}% del total   [Total de cotizaciones {cotizaciones.length}]  ) <Link to={'/admin/dashboard/cotizaciones/al-momento'}>+</Link> </h3>
          </div>

          <div>
            <h3>Reparaciones sin asignar: {pend0} <Link to={'/admin/dashboard/reparaciones/pendientes-0'}>+</Link> </h3>
          </div>

          <div>
            <h3>Reparaciones sin recoger: {pend1} <Link to={'/admin/dashboard/reparaciones/pendientes-1'}>+</Link> </h3>
            <br/><br/>
          </div>




          <h2>I N G R E S O S</h2>
          <div>
            <h3>Ingresos brutos de hoy ({fechaHoy}): ${brutos} MXN</h3>
            <h3>Ingresos netos de hoy ({fechaHoy}): ${netos} MXN</h3>
            <h3>Ingreso bruto promedio por persona de este mes ({meses[mes-1]} del {año}) : ${brutosMes/month.length} MXN</h3>

            <br/><br/>
          </div>





          <h2>U S U A R I O S</h2>
          <div>
            <h3>Total de usuarios: {usuarios.length} <Link to={'/admin/dashboard/usuarios/todos'}>+</Link> </h3>
          </div>

          <div>
            <h3>Creados este mes: {month.length} <Link to={'/admin/dashboard/usuarios/este-mes'}>+</Link> </h3>
          </div>

          <div>
            <h3>Porcentaje de usuarios nuevos que reparan (registrados en {meses[mes-1]} del {año}): {Math.floor((nue.length*100)/nuevos.length)}% <Link to={'/admin/dashboard/usuarios/este-mes'}>+</Link> </h3>
          </div>

          <div>
            <h3>Porcentaje de usuarios antiguos que reparan (registrados antes de {meses[mes-1]} del {año}): {Math.floor((ant.length*100)/antiguos.length)}% <Link to={'/admin/dashboard/usuarios/este-mes'}>+</Link> </h3>
          </div>

          <br/><br/>

          <h2>D I S P O S I T I V O S</h2>
          <h3><Link to={'/admin/dashboard/reparaciones/mas-pedidos'}>5 Dispositivos mas reparados</Link></h3>
          <h3><Link to={'/admin/dashboard/cotizaciones/mas-pedidos'}>5 Dispositivos mas cotizados</Link></h3>
          <MarcaMasCotizada/>

          <br/><br/>

      </div>
    )
}

export default Dashboard