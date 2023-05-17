import React, { useState } from "react";
import './curriculo.css'
import firebase from "../../firebase";
import 'firebase/auth'
import {Link, Route} from 'react-router-dom'
import Navbar from "../../components/navbar/index";
import Lenovo from '../quemsomos/logolenovo.png'
import dell from '../quemsomos/logodell.png'
import Ibm from '../quemsomos/logoibm.svg'
import Footer from "../../components/footer";

<div className="form-cadastro d-flex align-itens-center"> </div>

function Quemsomos (){
    return(
        <>
        <Navbar/>
        <div>
        <nav className="hero-content">
            <h1>CURSO WEB FOUNDATITION</h1>
            <p>Aprenda HTML, CSS e Javascript</p>
            </nav>
            
        </div>

<h1 class="classeh1"> Curriculo</h1>


<h2 class="classeh2"><b>NOME:</b> Eduardo Sousa Garcia</h2>
<h2 class="classeh2"><b>OBJETIVO:</b>Vaga para front-end/Back-end</h2>;

<h1 class="classeh1">
            Qualificações
        </h1>

       <div className="img-html">
           
       <a target= "_blank" href="https://www.dell.com.br" text-align-center> <img src={dell} alt="logo DELL"/> </a> 
       <br></br>
       <a target= "_blank" href="https://www.ibm.com/br-pt"><img text-align-rigth src={Ibm} alt="logo IBM"/> </a> 
       <br></br>
       <a target= "_blank" href="https://www.lenovo.com/br/pt"> <img src={Lenovo} alt="logo Lenovo"/> </a> 
       <br></br>
       </div>

       <h2>
            Formado em Tecnico de informatica
        </h2>
        <ul>
            <li>
                Centro Paula Souza
            </li>
        </ul>
        <h2>
            Cursos de especialização
        </h2>
        <ul>
            <li>
                Front-end <br></br>
                 Back-end <br></br>
        DCSS - DELL <br></br>
        Lenovo <br></br>
        Equipamentos de classificação de cedulas de dinheiro <br></br>
        NR10 - Eletrica <br></br>
        NR35 - Trabalho em altura <br></br>
        Sistemas de caixa eletronico <br></br>
        Programação em Visual Basic <br></br>
        Programação de routers cisco de grande porte <br></br>
        Implantação de redes de computadores <br></br>
            </li>
        </ul>


        <h2>
            <a href="https://www.printmac.com.br"target="blank"> <b> Printimac</b> </a>
        </h2>
        <ul>
            <li>
                2 anos de experiencia em programação de sistema de gerenciamento eletronico de documentos
           
            </li>
            </ul>
            <h2>
            <a href="https://www.ibm.com/br-pt"target="blank"> <b>IBM Brasil</b></a>
        </h2>
        <ul>
            <li>
                8 anos trabalhando com implementação e manutenção de automação bancaria e empresarial
        Atuei em manutenção de aplicativos e hardware de caixas eletronicos, sistemas e micros internos de agencias de banco e lojas de grandes redes de varejo.
        
        Em lojas de varejo atuei com sistemas em linux, tanto em terminais de usuarios, como em servidores.
            </li>
        </ul>
<Footer/>
</>
    )
}


                              
export default Quemsomos;
                                                                        

