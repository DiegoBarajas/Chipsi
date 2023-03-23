import { Link } from "react-router-dom";
import "../Styles/footer.scss";
import logo from '../Assets/Logo_img.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer__top">
                <img className="footer__top-logo" alt="logo" src={logo} />
                <div className="footer__top-redes">
                    <a href="https://www.facebook.com/cheapc.mx" target="_blank" rel="noopener noreferrer">
                        <img alt="" />
                    </a>
                    <a href="https://twitter.com/Chipsi_mx" target="_blank" rel="noopener noreferrer">
                        <img alt="" />
                    </a>
                    <a href="https://www.instagram.com/chipsi._/" target="_blank" rel="noopener noreferrer">
                        <img alt="" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20acerca%20de%20los%20Chipsi%20Puntos%20" target="_blank" rel="noopener noreferrer">
                        <img alt="" />
                    </a>
                </div>
            </section>
            <section className="footer__bottom">
                <Link to="/terminos">
                    Términos y condiciones
                </Link>
                <Link to="/cookies">
                    Uso de cookies
                </Link>
                <Link to="/privacidad">
                    Política de privacidad
                </Link>
                <Link to="/datos">
                    Uso de datos
                </Link>
                <Link to="/garantia">
                    Garantía de servicios
                </Link>
                <Link to="/politica-chipsipuntos">
                    Política de Chipsi Puntos
                </Link>
            </section>
            <p className="footer__mark">©2020 - 2023 Todos los derechos reservados. chipsi.mx es una marca registrada en México.</p>
        </footer>
    )
}