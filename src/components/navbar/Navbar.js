import React, {useState} from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import {AiFillApple, AiOutlineSearch, AiOutlineBars, AiOutlineClose} from "react-icons/ai"
import {BsBag} from "react-icons/bs"

function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link className="navbar__link" to={'/'}><AiFillApple/></Link>
        <div style={{top: show ? "0" : "-100vh"}} className="navbar__links">
          <Link className="navbar__link" to={'/ipad'}><span>iPad</span></Link>
          <AiOutlineClose onClick={()=> setShow(false)} className="navbar__close"/>
        </div>
        <Link className="navbar__link" to={'/'}><AiOutlineSearch/></Link>
        <Link className="navbar__link" to={'/'}><BsBag/></Link>
        <Link className="navbar__link" to={'/'}><AiOutlineBars onClick={()=> setShow(true)}/></Link>
      </div>
    </div>
  );
}

export default Navbar;
