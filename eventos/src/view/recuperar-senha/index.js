import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import 'firebase/auth'
import './usuario-recuperar.css'
import firebase from "../../firebase";
import {Link, Redirect} from 'react-router-dom'
function UsuarioRecuperarSenha(){

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos um link no seu email para você redefinir sua senha!');
        }).catch(erro => {
            setMsg('Verifique se o email está correto!');
        })
    }

    return(
        <>
            <Navbar />
                <form className="text-center form-login mx-auto mt-5">                
                    <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />

                    <div className="msg my-4 text-center">
                        <span>{msg}</span>
                    </div>

                    <button onClick={recuperarSenha} type="button" className="btn btn-lg btn-block btn-enviar">Recuperar Senha</button>

                    <div className="opcoes-login mt-5 text-center">
                <Link to="/login" className="mx-2">Ja possuo cadastro</Link>
                
            </div>
                </form>
                <Footer/>
        </>        
    )
}


export default UsuarioRecuperarSenha;