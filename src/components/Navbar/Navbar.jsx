import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import Underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  }

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  }

  useEffect(() => {
  const sectionIds = ["home", "about", "work", "services", "contact"];

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setMenu(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar_container">
        <div className="logo">
          <h1>©Essoh</h1>
        </div>

        <div className="nav_links">
          <img src={menu_open} onClick={openMenu} alt="" className='menu_bars' />
          
          <ul ref={menuRef} className="nav_menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav_mob_close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={Underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={Underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>My Work</p></AnchorLink>{menu==="work"?<img src={Underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={Underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={Underline} alt='' />:<></>}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
