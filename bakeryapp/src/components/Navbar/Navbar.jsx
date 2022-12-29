import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar=()=>{

    const print=()=>{
        let val=localStorage.getItem("Tvalue");
        console.log(val);
    }
    const [numProducts,setNumProducts]=useState(0);

   
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link className="link" to="/products/1">Products</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Cake Class</Link>
                    </div>
                </div>
                <div className="center">
                <div>
                    <Link className="link" to="/">Bakery</Link>
                </div>
                </div>
               
                <div className="right">
                <div className="icons">
                    <PersonOutlineIcon />
                    <div className="carticon">
                        <ShoppingCartIcon />
                        <span>{numProducts}</span>
                    </div>
                    <button onClick={print}>checkout</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar