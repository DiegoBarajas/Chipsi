import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import "../Styles/profile.scss";
import React, { useContext, useReducer, useState } from "react";
 import { Helmet } from "react-helmet-async";
 import { Store } from "../Store";
 import Swal from "sweetalert2";
import { getError } from "../utils";
import axios from "axios";
 import Footer from "../Components/Footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false };
    case "UPDATE_FAIL":
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
};



export default function ProfileScreen() {
  
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  }

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sellerName, setSellerName] = useState('');
  const [sellerLogo, setSellerLogo] = useState('');
  const [sellerDescription, setSellerDescription] = useState('');

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:4000/api/users/perfil",
        {
          name,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: "UPDATE_SUCCESS",
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Perfil de usuario actualizado con exito!",
        showConfirmButton: false,
        timer: 3500,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_FAIL",
      });
      Swal.fire(
        {
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        },
        getError(err)
      );
    }
  };
  
  return (
    <>
    <div className="profile">
      <Helmet>Perfil de usuario</Helmet> 
      <Nav />
      <div id="profile__container">
        <div className="profile__top">
          <div className="profile__top__personal">
            <img alt="" />
            <div className="profile__top__personal-name">
              <p>{name}</p> 
              <Link to="/">{email}</Link> 
            </div>
          </div>
          <div className="profile__top__options">
            <Link id="null" to="/perfil" className="profile__top__options-item">
              <img alt="" />
              <span>Configuración</span>
            </Link>
            <Link id="null" to="/pedidos" className="profile__top__options-item">
              <img alt="" />
              <span>Pedidos</span>
            </Link>
            <Link id="null" to="/cartera" className="profile__top__options-item">
              <img alt="" />
              <span>Cartera</span>
            </Link>
          </div>
        </div>
        <form onSubmit={submitHandler} className="profile__info">
          <div className="profile__info-item">
            <span>Nombre Completo</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} 
              required
            />
          </div>
          <div className="profile__info-item">
            <span>Correo Electrónico</span>
            <input
              type="email"
               value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="profile__info-item">
            <span>Contraseña</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="profile__info-item">
            <span>Confirmar contraseña</span>
            <input
              type="password"
               onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
          <button
            type="submit"
          >
            Actualizar Información de la cuenta
          </button>
        </form>
        <div className="profile__bad">
          <button onClick={signoutHandler}>Cerrar sesión</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}