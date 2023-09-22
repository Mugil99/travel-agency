import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from '../../assets/logo-light.png';
import logo2 from '../../assets/logo-dark.png';
function Navbar() {

    // to access a DOM element directly
    const navRef = useRef();

    // hold a mutable value in its .current property
    // onClick add or remove "Navbar__Responsive" className
    const showNavbar = () => {
        navRef.current.classList.toggle("Navbar__Responsive");
    };
    const [logoChange,setLogoChange]=useState(true);
    const [navColor, setnavColor] = useState("transparent");
    const [color, setColor] = useState("#C5C6C7")
    const listenScrollEvent = () => {
        window.scrollY > 15 ? setnavColor("white") : setnavColor("transparent");
        window.scrollY > 15 ? setColor("#1F2833") : setColor("white");
        window.scrollY > 15 ? setLogoChange(false) : setLogoChange(true);
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div className="Header" id="Header"
            style={{
                backgroundColor: navColor,
                color: color
            }}>
            <div className='Navbar__Title' onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0}>
                <img src={logo} style={{display:logoChange?"block":"none"}}></img>
                <img src={logo2} style={{display:logoChange?"none":"block"}}></img>
            </div>
            
            <nav ref={navRef} className='Navbar__Items'>
                <div onClick={() => { showNavbar(); document.getElementById('home').scrollIntoView({ behavior: 'smooth',}) }}
                    className="Navbar__Link1"><p className="Navbar__LinkText">Home</p></div>
                <div onClick={() => { showNavbar(); document.getElementById('About').scrollIntoView({ behavior: 'smooth',}) }}
                    className="Navbar__Link1"><p className="Navbar__LinkText">About</p></div>
                <div onClick={() => { showNavbar(); document.getElementById('Destination').scrollIntoView({ behavior: 'smooth',}) }}
                    className="Navbar__Link2"><p className="Navbar__LinkText">Destination</p></div>
                <div onClick={() => { showNavbar(); document.getElementById('Blog').scrollIntoView({ behavior: 'smooth',}) }}
                    className="Navbar__Link3"><p className="Navbar__LinkText">Blog</p></div>
                <div onClick={() => { showNavbar(); document.getElementById('Contact').scrollIntoView({ behavior: 'smooth',}) }}
                    className="Navbar__Link4"><p className="Navbar__LinkText">Contact</p></div>
                <button
                    className="Navbar__Button Navbar__CloseButton"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="Navbar__Button"
                style={{
                    color: color
                }}
                onClick={showNavbar}>
                <FaBars />
            </button>
            
        </div>
    );
}

export default Navbar;