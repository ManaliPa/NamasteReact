import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
const Header = () =>
 {

const[btnname, setbtnname]=useState("Login")
    return(
       <div className="header">
        <div>
        <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart</li>
                <button className="loginButton" onClick={()=>((btnname ==="Login")? setbtnname("Logout"):setbtnname("Login"))}>{btnname}</button>
            </ul>
        </div>
       </div> 
    )

    
 }
 export default Header;