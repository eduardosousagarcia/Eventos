import React, { useState } from "react";
import './home.css'
import firebase from "../../firebase";
import 'firebase/auth'
import {Link} from 'react-router-dom'
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index"

import { useSelector } from "react-redux";


function Home(){
    return(
        <>
        <Navbar/>

        <h1>{useSelector( state => state.usuarioEmail)}</h1>
        <Footer/>
        
        
        
</>
    )
}

export default Home;