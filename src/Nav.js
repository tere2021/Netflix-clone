import { useEffect, useState } from 'react';
import './Nav.css';
import logoNetflix from "./assets/logonetflix.png";
import avatarNetflix from "./assets/netflixavatar.png";


function Nav () {
    const [show, handleShow] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return(
        <div className= {`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src = {logoNetflix}
                alt="Netflix Logo"
            />
            
            <img 
                className='nav__avatar'
                src ={avatarNetflix}
                alt= "Avatar" 
            />
        </div>
    )
}
export default Nav