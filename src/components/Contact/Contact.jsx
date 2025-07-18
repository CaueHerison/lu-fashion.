import React from 'react'
import style from './Contact.module.scss'
import instagram from '../../assets/favicon/instagram.png'
import whatsapp from '../../assets/favicon/whatsapp.png'

const Contact = () => {
  return (
    <div id='Contato'>

        <div className={style.containerText}>
          <h2>Fale Conosco</h2>
          <p>Entre em contato com a nossa loja de roupas feminina</p>
          <a href="https://www.instagram.com/lu.fashion.lf/" target='_blank'><img src={instagram} alt="instagram" /> <h3>Instagram</h3></a>
          <a href="https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=558589526144&text"target='_blank'><img src={whatsapp} alt="whatsapp" /><h3>WhatsApp</h3></a>
        </div>
    </div>
  )
}

export default Contact