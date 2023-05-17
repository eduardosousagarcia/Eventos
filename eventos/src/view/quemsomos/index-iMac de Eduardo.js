import React, { useState } from "react";
import './curriculo.css'
import firebase from "../../firebase";
import 'firebase/auth'
import {Link, Route} from 'react-router-dom'
import Navbar from "../../components/navbar/index";


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
<h2 class="classeh2"><b>OBJETIVO:</b>Vaga para front-end/Back-end</h2>

<h1 class="classeh1">
            Qualificações
        </h1>

       <div className="img-html">
           
       <a target= "_blank" href="https://www.dell.com.br">Dell </a> 
       <br></br>
       <a target= "_blank" href="https://www.ibm.com/br-pt">IBM </a> 
       <br></br>
       <a target= "_blank" href="https://www.lenovo.com/br/pt">Lenovo </a> 
       </div>






</>
    )
}


                              
export default Quemsomos;
                                                                        

