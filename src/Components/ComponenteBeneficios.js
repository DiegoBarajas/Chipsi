import "../Styles/componente__beneficios.scss";

export default function ComponenteBeneficios(props) {
    return (
        <section className="reparar__beneficios">
            <div className="reparar__beneficios-items">
                <div className="reparar__beneficios-items-item">
                    <img alt="" />
                    <p>Prueba de satisfaccion de <span>8 horas</span></p>
                </div>
                <div className="reparar__beneficios-items-item">
                    <img alt="" />
                    <p>Envio totalmente <span>gratis</span></p>
                </div>
                <div className="reparar__beneficios-items-item">
                    <img alt="" />
                    <p>Garantia de <span>6 meses</span></p>
                </div>
            </div>
            <div className="reparar__beneficios-device" id={props.idClean}>
                <img alt="" />
                <p>Para tu comodidad y si asi lo deseas, Chipsi te prestara un dispositivo como el tuyo para que no te quedes incomunicado mientras se realiza el servicio.</p>
            </div>
        </section>
    )
}