import React, { useState } from "react";
import './login.css'
import firebase from "../../firebase";
import 'firebase/auth'
import {Link, Redirect} from 'react-router-dom'
import Navbar from "../../components/navbar/index";
import '../usuario-novo/usuario-novo.css'
import Footer from "../../components/footer";
import { useSelector, useDispatch} from 'react-redux';




function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    
   
    
    function logar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso')
            setTimeout(() => {
                dispatch ({type: 'LOG_IN', usuarioEmail: email})
            },1000);
            
        }).catch(erro => {
            setMsgTipo('erro')

        })
  

      
    }
  
    
    return(
<>

<Navbar/>
<div className="login-content d-flex align-items-center">
            
            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/quemsomos' /> : null}

            <form className="form-signin text-center mx-auto">
            <div className="text-center mb-4">
            <i class="far fa-smile-wink text-white fa-5x"></i>

            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>          
            </div>
        
            
            <input onChange={(e) => setEmail(e.target.value) }  type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />          
            <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />          
        
            
            <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button">Logar</button>

            <div className="msg-login text-white text-center my-5">
                {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você está conectado! &#128526; </span>}
                {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546; </span>}               
            </div>

            <div className="opcoes-login mt-5 text-center">
                <Link to="/usuariorecuperar" className="mx-2">Recuperar Senha</Link>
                <span className="text-white">&#9733;</span>
                <Link to='novousuario' className="mx-2">Quero Cadastrar</Link>
            </div>

      </form>
      </div>
      <Footer/>
</>
    )
}

export default Login;