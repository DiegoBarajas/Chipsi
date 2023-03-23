import Nav from "../Components/Nav";
import Moto_img from "../Assets/Moto_img.svg"
import Regalo_img from "../Assets/Regalo_img.svg"
import Reloj_img from "../Assets/Reloj_img.svg"
import LogoFondo_img from "../Assets/LogoFondo_img.png"
import HomeOffert from "../Components/HomeOffert";
import "../Styles/home.scss";
import Footer from "../Components/Footer";
import { Store } from "../Store";
import { useContext } from "react";
import HomeItems from "../Components/HomeItems";
import HomeCurrent from "../Components/HomeCurrent";
import HomeReferral from "../Components/HomeReferral";
import HomeSlider from "../Components/HomeSlider";
import HomeCurrent2 from "../Components/HomeCurrent2";
import Cronometro_img from "../Assets/Cronometro_img.svg";
import Completado2_img from "../Assets/Completado2_img.svg";
import FlechaNegra_img from "../Assets/FlechaNegra_img.svg";

export default function Home() {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  //
  //
  //
  //
  // ESTA APP ESTA DISEÑADA PARA CELULARES, SE QUE SE VE DEL CULO EN DESKTOP. ES TOTALMENTE NORMAL Y NO SERA ADAPTADA, GRACIAS POR SU COMPRENSION UWU
  // FAVOR DE HACER PRUEBAS, TESTS Y DEPLOYS EN CELULAR CON NGROK O ALGUNA OTRA HERRAMIENTA UWU
  // NO VISUALIZAR EN COMPUTADORA PORQUE ME ENOJO
  //
  //
  //

  return (
    <article className="home">
      <img className="logo__fondo" src={LogoFondo_img} alt="" />
      <Nav />
      <HomeItems /> 
      {/* El item de HomeCurrent se utiliza cuando se muestra el proceso normal de 
      seguimiento del servicio en el home junto con los pasos actuales, los otros 
      2 componentes se utilizan cuando el usuario necesita establecer una hora 
      de entrega y cuando ya se entrego el dispositivo para pedir feedback y una reseña  */}
      {/* <HomeCurrent2 
        link="/servicio"
        img={Cronometro_img}
        alt="Cronometro"
        h3="¡Dispositivo listo!"
        span="Establece una hora de entrega"
        linkImg={FlechaNegra_img}
        linkAlt="Establecer hora"
      />  */}
      {/* <HomeCurrent2 
        link="/servicio"
        img={Completado2_img}
        alt="Completado"
        h3="Dispositivo entregado"
        span="Cuentanos que tal te fue con el servicio"
        linkImg={FlechaNegra_img}
        linkAlt="Dejar reseña"
      /> */}
      <HomeReferral />
      <HomeSlider />
      <section className="home__offers">
        <HomeOffert
          tittle="Envío gratis"
          tittle2="No cobramos tarifas extras por envío"
          p="Aplicable a cualquier servicio"
          button="¡Aprovecha ahora!"
          url="/reparar"
          img={Moto_img}
        />
        <HomeOffert
          tittle="¿Necesitas mas?"
          tittle2="-15% en tu primer servicio"
          p="¡No importa cual sea!"
          button="¡Canjear ahora!"
          url="/reparar"
          img={Regalo_img}
        />
        <HomeOffert
          tittle="Al que madruga, chipsi le ayuda"
          tittle2="-10% antes de las 5 pm"
          p="Se puede usar veces ilimitadas 👀"
          button="¡Probar ahora!"
          url="/reparar"
          img={Reloj_img}
        />
      </section>
      <Footer />
    </article>
  );
}
