import React from 'react'
import {Routes,Route,NavLink} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {About} from "./Pages/About/About";
import {Login} from "./Pages/Login/Login"
export function Authenticatedapp(props) {
    
    return (
        <>
        <nav className="navbar__items">
           <li className="navbar__item">
             <NavLink className="navbar__item-link" to="/">Home</NavLink>
           </li>
           <li className="navbar__item">
             <NavLink className="navbar__item-link" to="/about">About</NavLink>
           </li >
           <li className="navbar__item">
             <NavLink className="navbar__item-link" to="/login">Log Out</NavLink>
           </li>
         </nav>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/login" element={<Login/>}/>
         </Routes>
        </>
    )
}
