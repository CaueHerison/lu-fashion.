import React from 'react'
import style from './Header.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'


const Header = () => {
    const [isOpen,setIsOpen] = useState(false);

    const openBtn = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
        <header className={style.header}>
            <nav className={style.navBar}>
                <div className={style.logo}><img src={Logo} alt="Logo"/></div>


                <ul className={`${style.menu} ${isOpen ? style.active : ""}`} >
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/produtos'>Produtos</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                </ul>
                
                <button className={style.menuHamburgue} onClick={openBtn}>
                    <span className="material-icons">{isOpen ? "close" : "menu"}</span>
                </button>
            </nav>
        </header>
    </>
  )
}

export default Header