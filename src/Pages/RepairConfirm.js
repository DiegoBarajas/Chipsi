import { Link, useParams } from "react-router-dom"
import "../Styles/reparar__confirmar.scss"
import { useContext, useEffect, useState } from "react";
import axios, { formToJSON } from "axios";
import { Store } from "../Store";
import { backend } from '../utils';

export default function RepararConfirmar() {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [user, setUser] = useState({});
    useEffect(()=>{
        const getUser = async()=>{
            const res = await axios.get(backend()+'/api/usuario/'+userInfo._id);
            setUser(res.data);

            if(res.data.direccion === undefined){
                window.location.href = '/usuario/agregarDireccion';
            }
        }
        getUser();

    }, user);

    const {producto, servicio, marca, id} = useParams();
    const [prod, setProd] = useState({});
    const [serv, setServ] = useState([]);
    const [pedo, setPedo] = useState({});
    const [desc, setDesc] = useState(0);
    
    const [pedidos, setPedidos] = useState([]);
    useEffect(()=>{
        const getPedidos = async()=>{
            const res = await axios.get(backend()+'/api/pedido');
            setPedidos(res.data);
        }

        getPedidos();
    }, [pedidos]);

    const linkBefore = '/reparar/'+producto+'/'+servicio+'/'+marca+'/'+id;


    useEffect(()=>{
        const getProd = async()=>{
            const res = await axios.get(backend()+'/admin/'+producto+'/'+id);
            setProd(res.data);
        }
        getProd();
    }, prod);


    useEffect(()=>{
        const getServ = async()=>{
            const res = await axios.get(backend()+'/admin/problema');
            setServ(res.data);
        }
        getServ();

        let aux = serv;
        for(let i=0 ; i<aux.length ; i++){
            if(aux[i].producto===producto && aux[i].url===servicio){
                setPedo(aux[i]);
            }
        }
    }, [serv]);

    const descuento = prod[servicio]*(desc/100);
    const total = prod[servicio]-descuento;

    const [cupon, setCupon] = useState('');

    const cambiarDesc = (e)=>{
    
        setDesc(e.target.placeholder);
        setCupon(e.target.id);

    }

    const cambiarImg = ()=>{
        const tipo = document.getElementById('tipoPago').value;

        if(tipo == 'Efectivo'){
            setImg();
        }else if(tipo == 'PayPal'){
            setImg();
        }else if(tipo == 'Tarjeta'){
            setImg();
        }else if(tipo == 'Tranferencia'){
            setImg();
        }else if(tipo == 'ChipsiPunto'){
            setImg();
        }   
    }

    const generarPedido = async()=>{
        const reemplazo = document.getElementById('remplazo').checked;
        const tipoPago = document.getElementById('tipoPago').value;
        const prop =  document.getElementById('propina');

        let propina;
        if(prop.value === ''){
            propina = '0';
        }else{
            propina = prop.value;
        }

        const formData = {
            'cliente': user._id,
            'producto': prod.nombre,
            'servicio': pedo.nombre,
            'precio': prod[servicio],
            'descuento': desc,
            'telefono': user.telefono,
            'direccion': user.direccion,
            'rango': user.rango,
            'pago': tipoPago,
            'reemplazo': reemplazo,
            'propina': propina, 
            "cupon": cupon
        }

        localStorage.setItem("data", JSON.stringify(formData));

        window.location.href = tipoPago.toLowerCase();
    }

    const [opc, setOpc] = useState([]);
    const [prim, setPrim] = useState();
    useEffect(()=>{
        if(user.isTendero){
            setOpc(['ChipsiPunto', 'Efectivo', 'PayPal', 'Tarjeta', 'Tranferencia']);
            setPrim();
        }else{
            setOpc(['Efectivo', 'PayPal', 'Tarjeta', 'Tranferencia']);
            setPrim();
        }
    });

    const [img, setImg] = useState(prim);

    const [cupones, setCupones] = useState([]);
    const [cuponesAuto, setCuponesAuto] = useState([]);
    useEffect(()=>{
        const getCupones = async()=>{
            const res = await axios.get(backend()+'/api/cupon');
            const array = res.data;
            const aux = [];

            const res2 = await axios.get(backend()+'/api/descuento/'+userInfo._id);
            const descuentos = res2.data;

            const res3 = await axios.get(backend()+'/api/pedido');
            const ped = res3.data;

            if(cupones.length === 0){
                array.map(async (a)=>{
                    if(a.automatico){

                        if(a.unico){
                            for(let i=0; i<descuentos.length; i++){
                                if(descuentos[i].cupon == a.codigo){
                                    return;
                                }
                            }
                        }

                        if(a.primera){
                            for(let i=0; i<ped.length; i++){
                                if(ped[i].cliente == userInfo._id){
                                    return;
                                }
                            }                        
                        }
                        
                        aux.push(a);
                    }
                })
                
                setCupones(aux);
            }
                
        }

        getCupones();
    }, [cupones]);

    const agregarCupon = async()=>{
        const cupon = document.getElementById('input_cupon').value;

        const aux = cupones;
        const res = await axios.get(backend()+'/api/cupon/'+cupon);

        const res2 = await axios.get(backend()+'/api/descuento/'+userInfo._id);
        const descuentos = res2.data;

        if(res.data._id === undefined){
            alert('No se ha encontrado ese cupon');
        }else{

            for(let i=0; i<aux.length; i++){
                if(aux[i].codigo == cupon){
                    return;
                }

                if(user.codigo == cupon){
                    alert('No puedes usar tu propio cupon');
                    return;
                }
                
                if(res.data.primera){
                    for(let j=0; j<pedidos.length; j++){
                        if(pedidos[j].cliente == user._id){
                            alert('Este cupon solo puede ser utilizado en el primer pedido')
                            return;
                        }
                    }
                }

                if(res.data.unico){
                        for(let i=0; i<descuentos.length; i++){
                        if(descuentos[i].cupon == res.data.codigo){
                            alert('Este cupon solo se puede utilizar una vez');
                            return;
                        }
                        
                    }
                }
            }

            aux.push(res.data);
            setCupones(aux);
        }


    }

    return (
        <article className="reparar__confirmar">
            <div className="reparar__confirmar__top">
                <Link to={linkBefore}>
                    <img alt="" />
                </Link>
                <h3>Confirmar servicio</h3>
            </div>
            <section className="reparar__confirmar__ubicacion">
                <Link className="reparar__confirmar__ubicacion__top">
                    <div className="reparar__confirmar__ubicacion__top-personal">
                        <div className="reparar__confirmar__ubicacion__top-personal-calle">
                            <span>
                            </span>
                            <span>
                                {user.direccion}
                            </span>
                        </div>
                        <div className="reparar__confirmar__ubicacion__top-personal-num">
                            <span>{user.telefono}</span>
                        </div>
                    </div>
                    <div className="reparar__confirmar__ubicacion__top-button">
                        <img alt="" />
                    </div>
                </Link>
                <div className="reparar__confirmar__ubicacion__bottom">
                    <div className="reparar__confirmar__ubicacion__bottom-tiempo">
                        <img alt="" />
                        <span>Tiempo estimado</span>
                    </div>
                    <div className="reparar__confirmar__ubicacion__bottom-cantidad">
                        <span>1 hora</span>
                    </div>
                </div>
            </section>
            <section className="reparar__confirmar__metodo">
                <span>Metodo de pago</span>
                <Link>
                    <img src={img} alt="" />
                    <select id='tipoPago' onChange={cambiarImg}>

                        {
                            opc.map((op)=>{
                                return(<option>{op}</option>)
                            })
                        }

                    </select>
                </Link>
            </section>
            <section className="reparar__confirmar__cupones">
                <h3>Cupones disponibles</h3>
                <img className="shitpopo" alt="" />
                <form action="">
                    
                    
                    {
                        cupones.map((c)=>{
                            return ( <div>

                                        <input name='cupon' type="radio" placeholder={c.descuento} id={c.codigo} onChange={cambiarDesc} />
                                        <label className="reparar__confirmar__cupones-cupon" htmlFor={c.codigo}>
                                            <span>-{c.descuento}%: {c.codigo}</span>
                                            <div className="reparar__confirmar__cupones-cupon-circle">
                                                <img alt="" />
                                            </div>
                                            <span>{c.nombre}</span>
                                        </label>

                                    </div>
                            )
                        })
                    }

                </form>
            </section>     

            <section>
                <h1>Agregar cupon</h1>
                <input type={'text'} placeholder='Ingrese el cupon' id='input_cupon' /> <button onClick={agregarCupon}>Agregar</button>
            </section>


            <section className="reparar__confirmar__remplazo">
                <h3>Dispositivo de reemplazo
                    <Link>
                        <img alt="" />
                    </Link>
                </h3>
                <div className="reparar__confirmar__remplazo-button">
                    <span className="reparar__confirmar__remplazo-button-span">Solicitar dispositivo</span>
                    <input id="remplazo" type="checkbox" />
                    <label htmlFor="remplazo">
                        <span></span>
                    </label>
                </div>
            </section>
            <section className="reparar__confirmar__precio">
                <h3>Reestreno de {prod.nombre}</h3>
                <div className="reparar__confirmar__precio-reparacion">
                    <div className="reparar__confirmar__precio-reparacion-img">
                        <img src={prod.img} alt="" />
                        <p>{pedo.nombre} para {producto} {prod.nombre}</p>
                    </div>
                    <span>
                        {prod[servicio]} MXN
                    </span>
                </div>
                <div className="reparar__confirmar__precio-envio">
                    <p>Tarifa de envio</p>
                    <span>Gratis</span>
                </div>
                <div className="reparar__confirmar__precio-propina">
                    <div className="reparar__confirmar__precio-propina-top">
                        <p>Propina</p>
                        <input type='number' id='propina' placeholder="Propina"/>
                    </div>
                    <span>La propina esta 100% destinada al repartidor como forma de agradecimiento</span>
                </div>
            </section>
            <section className="reparar__confirmar__total">
                <h2>Total</h2>
                <div className="reparar__confirmar__total-right">
                    <p>${total} MXN</p>
                    <span>(-${prod[servicio] * desc / 100} MXN)</span>
                </div>
            </section>
            <Link className="reestrenaruwu" onClick={generarPedido}>
                Pagar
                <img alt="" />
            </Link>
        </article>
    )
}