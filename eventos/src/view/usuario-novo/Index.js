import React, { useState } from "react";
import './usuario-novo.css'
import firebase from "../../firebase";
import 'firebase/auth'
import Navbar from "../../components/navbar/index.js";
import {Link} from 'react-router-dom'
import Footer from "../../components/footer";

function Novousuario(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState(); 
    const [msg, setMsg] = useState(); 
    const [carregando, setCarregando] = useState()

    function cadastrar()
        {
        setMsgTipo(null);
        if (!email || !email){
            setMsgTipo('erro')
            setMsg('voce deve informar o email e senha para realizar o cadastro!')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            
            setMsgTipo('sucesso')
        }).catch(erro => {
            setCarregando(0);
           setMsgTipo('erro')
           switch(erro.message)
            {
                case 'Password should be at least 6 characters':
                    setMsg('sua senha deve conter pelo menos 6 caracteres');
                    break;
                case 'The email address is already in use by another account.':
                        setMsg('Este email ja esta sendo usado por outro usuario');
                    break;
                case 'The email address is badly formatted.':
                            setMsg('Formato de e-mail invalido')
                    break;
                 default:
                            setMsg('Não foi possivel cadastrar, tente novamente em instantes!');
                            break;
            }
        })

        }
    

return(
    <>
    <Navbar/>

    <div className="form-cadastro d-flex align-itens-center">
    <form className="text-center form-login mx-auto mt-5">
        <h1 className=" h3 mb-3 text-black font-weigth-bold">Cadastro</h1>

        <input onChange={(e) => setEmail(e.target.value) } type= "email" className="form-control my-2" placeholder="e-mail" />
        <input onChange={(e) => setSenha(e.target.value) } type= "password" className="form-control my-2" placeholder="Senha" />
{
    carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span> </div>
    : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastro</button>
}

       
        

        <div className="msg-login text-black text-center">
            
                {msgTipo === 'sucesso' && <spam><strong>Pronto! </strong>Usuario cadastrado com sucesso.</spam>}
                {msgTipo === 'erro' && <spam><strong>Erro ao cadastrar usuario</strong>  {msg}</spam>}                 
            
            
            </div>

            <div className="opcoes-login mt-5 text-center">
                <Link to="/login" className="mx-2">Ja possuo cadastro</Link>
                
            </div>
    </form>
    </div>
    <Footer/>
    </>
)

}
export default Novousuario;