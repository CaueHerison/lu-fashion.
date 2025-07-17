import React from 'react'
import style from './Banner.module.scss'
import banner from '../../assets/collection-img/jaqueta-sf2.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
        <section className={style.banner}>
            <div className={style.bannerText}>
                <h1>Estilo e Elegância em Cada Detalhe</h1>
                <Link to="/produtos" className={style.btn} >Ver Coleção</Link> 
            </div>
            <div className={style.bannerImg}>
              <img src={banner} alt="foto de uma jaqueta rosa" />
            </div>
        </section>
    </>
  )
}

export default Banner