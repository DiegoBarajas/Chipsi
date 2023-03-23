import ComponenteBeneficios from "../Components/ComponenteBeneficios"
import { Link } from "react-router-dom"
import "../Styles/reparar__beneficios.scss";
import { useContext, useEffect } from "react";
import { Store } from "../Store";
import axios from "axios";
import { backend } from "../utils";

export default function RepararBeneficios() {
    
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    useEffect(()=>{
        const setBeneficios = async()=>{
            if(userInfo == null){
                document.cookie = 'beneficios=true';
            }else{
                document.cookie = 'beneficios=true';
                await axios.put(backend()+'/api/beneficios/'+userInfo._id);
            }
        }

        setBeneficios();
    })
    
    const back = ()=>{
        window.history.back();
    }

    return (
        <article className="reparar__beneficios__component">
            <h2>
                Los mejores beneficios
            </h2>
            <p className="pipipopo">
                Antes de que continues, nos gustaria recordarte algunos de los mejores beneficios que ofrecemos en Chipsi
            </p>
            <ComponenteBeneficios />
            <div className="reparar__beneficios__component-buttons">
                <Link to="/faq">
                    Saber más
                </Link>
                <Link onClick={back}>
                    ¡Empecemos!
                </Link>
            </div>
        </article>
    )
}