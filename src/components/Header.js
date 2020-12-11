import React from "react";
import logo from '../img/logo.png';

const Header = () =>{
    return(
        <header className="d-flex justify-content-center mt-3">
            <img src={logo} alt=''/>
        </header>
    )

}

export default Header;