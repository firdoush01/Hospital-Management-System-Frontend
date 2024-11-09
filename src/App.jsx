import React from "react"
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Appointment from "./pages/Appointment"
import AboutUs from "./pages/AboutUs"
import Register from "./pages/Register"
import Login from "./pages/Login"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
        <Router>
            <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/appointment' element={<Appointment/>}/>
                 <Route path='/about' element={<AboutUs/>}/>
                 <Route path='/register' element={<Register/>}/>
                 <Route path='/login' element={<Login/>}/>
                 
                
            </Routes>
        </Router>
        <ToastContainer position="top-center"></ToastContainer>
        </>
    )
}

export default App