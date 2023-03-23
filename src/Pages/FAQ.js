import Nav from "../Components/Nav.js";
import "../Styles/faq.scss";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.js";
export default function FAQ() {
    return (
        <>
            <Nav />
            <h2 className="faq__h2">¿Dudas al <span>reparar con chipsi?</span></h2>
            <article className="faq">
                <img className="img__fondo__faq" alt="" />
                <section className="faq__q">
                    <input type="checkbox" id="faq__input1" />
                    <label htmlFor="faq__input1" className="faq__q-tittle">
                        <img alt="" />
                        <h3>&#191;Como se repara?</h3>
                    </label>
                    <label htmlFor="faq__input1" className="faq__q-text">
                        <p>
                            Los puntos chipsi son la forma más sencilla, rápida y segura de ofrecerle reparaciones a las personas.
                        </p>
                        <p>
                            Convierte tu comercio en un centro de recolección autorizado de chipsi y gana comisiones por cada dispositivo que lleven a tu negocio. No inviertes nada, las recompensas son semanales.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input2" />
                    <label htmlFor="faq__input2" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Cual es el proceso?</h3>
                    </label>
                    <label htmlFor="faq__input2" className="faq__q-text">
                        <p>
                            Te pagamos comisiones de hasta $100 por cada dispositivo que recojas y guardes en tu establecimiento (tienda, papelería, abarrotera, ciber).
                        </p>
                        <p>
                            Lo único que deberás hacer es guardar los dispositivos que te lleguen hasta que nuestro repartidor pase por ellos y también cuando el repartidor los entregue reparados entregarle su dispositivo al cliente.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input3" />
                    <label htmlFor="faq__input3" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Quien recoge mi dispositivo?</h3>
                    </label>
                    <label htmlFor="faq__input3" className="faq__q-text">
                        <p>
                            Establecimientos públicos ubicados en colonias populares como: tiendas, misceláneas, papelerías, ciberes, papelerías y abarroteras.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input4" />
                    <label htmlFor="faq__input4" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Esta protegido mi dispositivo en caso de imprevistos?</h3>
                    </label>
                    <label htmlFor="faq__input4" className="faq__q-text">
                        <p>
                            Convertir tu negocio en un chipsi punto es muy sencillo, solo necesitas llenar un formulario y tener los siguientes documentos a la mano:
                        </p>
                        <ul>
                            <li>INE/IFE</li>
                            <li>RFC</li>
                            <li>CURP</li>
                            <li>2 comprobantes de domicilio</li>
                            <li>Nombre completo del encargado de la tienda</li>
                            <li>Nombres de trabajadores y otras personas con acceso a la tienda</li>
                        </ul>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input5" />
                    <label htmlFor="faq__input5" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Tienen establecimiento fisico?</h3>
                    </label>
                    <label htmlFor="faq__input5" className="faq__q-text">
                        <p>
                            Al unirte a los cientos de Chipsi puntos le permites a las personas tener acceso a servicios técnicos de calidad mas cerca de ellos, por eso te pagamos hasta $100 MXN de comisión por cada dispositivo.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input6" />
                    <label htmlFor="faq__input6" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Que pasa si no quedo satisfecho?</h3>
                    </label>
                    <label htmlFor="faq__input6" className="faq__q-text">
                        <p>
                            Las comisiones tienen una base de $50 basada en nuestro algoritmo o en la demanda de tu Chipsi punto, pero estas pueden llegar hasta a los $100 dependiendo de lo que recojas y la frecuencia con la que lo hagas 🤠
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input7" />
                    <label htmlFor="faq__input7" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Por que se deben llevar mi dispositivo?</h3>
                    </label>
                    <label htmlFor="faq__input7" className="faq__q-text">
                        <p>
                            Nuestros encargados de logística recogen tus dispositivos todos los días durante el medio día, y la tarde noche. No hay un horario fijo y su llegada puede variar, pero es seguro que si tienes almacenado un dispositivo nuestros recolectores pasaran al menos una vez para llevarse el equipo que tienes guardado.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input8" />
                    <label htmlFor="faq__input8" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Es a domicilio?</h3>
                    </label>
                    <label htmlFor="faq__input8" className="faq__q-text">
                        <p>
                            No, los encargados de logística y recolectores pasaran siempre a tu establecimiento a hacer las recolecciones ahí. De hecho no debes sacar los dispositivos a ningún lugar en ningún momento, quédate cómodo en tu local recogiendo reparaciones.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input9" />
                    <label htmlFor="faq__input9" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Como funcionan los metodos de pago?</h3>
                    </label>
                    <label htmlFor="faq__input9" className="faq__q-text">
                        <p>
                            Tienes muchas opciones para conseguir clientes para reparar, entre ellas están: promocionar tu Chipsi punto con tus clientes habituales, usar el poster de “Aquí es un Chipsi punto” que te proporcionaremos de forma gratuita al unirte en un lugar sumamente visible como la caja o donde cobres.
                        </p>
                    </label>
                </section>
            </article>
            <h2 className="faq__h2">Dudas al dejar mi teléfono en un <span>chipsi punto</span></h2>
            <article className="faq">
                <img className="img__fondo__faq" alt="" />
                <section className="faq__q">
                    <input type="checkbox" id="faq__input10" />
                    <label htmlFor="faq__input10" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Qué son?</h3>
                    </label>
                    <label htmlFor="faq__input10" className="faq__q-text">
                        <p>
                            Los puntos chipsi son la forma más sencilla, rápida y segura de ofrecerle reparaciones a las personas.
                        </p>
                        <p>
                            Repara tu celular en tu tiendita de preferencia, ahorra tiempo, dinero y esfuerzo mientras apoyas a los comercios locales.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input11" />
                    <label htmlFor="faq__input11" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Son confiables?</h3>
                    </label>
                    <label htmlFor="faq__input11" className="faq__q-text">
                        <p>
                            Absolutamente. El tendero no cerrara su negocio para robarse un dispositivo, al contrario tienes muchos beneficios como: garantía de 6 meses, descuento por entregar en Chipsi punto, soporte técnico personalizado y hasta puedes llevarte un celular para que sigas comunicándote mientras reparamos el tuyo.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input13" />
                    <label htmlFor="faq__input13" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Dónde están?</h3>
                    </label>
                    <label htmlFor="faq__input13" className="faq__q-text">
                        <p>
                            ¡Tenemos Chipsi puntos por toda tu ciudad! Seguramente hay uno cerca de ti, <Link to="/working">consúltalo aquí</Link>.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input14" />
                    <label htmlFor="faq__input14" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Cómo entrego mi celular para que lo reparen?</h3>
                    </label>
                    <label htmlFor="faq__input14" className="faq__q-text">
                        <ul>
                            <li>Cotiza tu reparación en <a href="https://chipsi.mx/" target="_blank" rel="noopener noreferrer">chipsi.mx</a></li>
                            <li>Lleva tu dispositivo a tu Chipsi punto mas cercano</li>
                            <li>Paga tu reparación cuando recojas tu teléfono como nuevo</li>
                        </ul>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input15" />
                    <label htmlFor="faq__input15" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Cuánto tardan en reparar?</h3>
                    </label>
                    <label htmlFor="faq__input15" className="faq__q-text">
                        <p>
                            Las reparaciones toman hasta 24 horas en realizarse a partir de que el encargado de logística recoge tu dispositivo en un Chipsi punto. Fuera de eso el tiempo que el dispositivo pasa en el punto no cuenta dentro de las 24 horas.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input16" />
                    <label htmlFor="faq__input16" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Lo repara el tendero o un técnico profesional?</h3>
                    </label>
                    <label htmlFor="faq__input16" className="faq__q-text">
                        <p>
                            El tendero no toca tu dispositivo mas que para almacenarlo. Todos los equipos reparados por Chipsi son atendidos por técnicos altamente capacitados para la tarea a desempeñar.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input17" />
                    <label htmlFor="faq__input17" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Se llevan mi teléfono a otro lado?</h3>
                    </label>
                    <label htmlFor="faq__input17" className="faq__q-text">
                        <p>
                            Si, tu dispositivo es almacenado en un Chipsi punto hasta que un encargado de logística de Chipsi lo recoge para llevarlo al taller indicado, esto se debe a que buscamos proporcionar la mejor atención personalizada a cada tipo de dispositivo y por ende necesitamos que un profesional en cada área haga su trabajo con el equipo que le toca.
                        </p>
                    </label>
                </section>
                <section className="faq__q">
                    <input type="checkbox" id="faq__input18" />
                    <label htmlFor="faq__input18" className="faq__q-tittle">
                        <img alt="" />
                        <h3>¿Qué garantía tengo?</h3>
                    </label>
                    <label htmlFor="faq__input18" className="faq__q-text">
                        <ol>
                            <li>Garantía de 6 meses en todos los servicios: siempre estarás protegido si hay algún imprevisto.</li>
                            <li>Claridad en todo momento: Podrás consultar todo el tiempo el status de tu dispositivo tanto por Whatsapp como por la plataforma.</li>
                            <li>Tu dispositivo no se mueve sin que lo sepas: Siempre que hagamos un movimiento con tu dispositivo serás notificado. Sabrás cuando salga del Chipsi punto, cuando llegue al taller, cuando este siendo reparado, cuando salga del taller y cuando llegue de vuelta a tu Chipsi punto.</li>
                            <li>Repara ahora paga después: Tienes la facilidad de contratar tu reparación hasta a 3 meses sin intereses.</li>
                            <li>Garantía de satisfacción de 8 horas: después de que llegue al Chipsi punto tienes 8 horas para decidir si estas satisfecho con el servicio.</li>
                        </ol>
                    </label>
                </section>
            </article>
            <Footer />
        </>

    )
}