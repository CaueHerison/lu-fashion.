import React from 'react'
import style from './BannerImg.module.scss'
import foto from '../../assets/collection-img/image.png'

const BannerImg = () => {
  return (
    <>
        <div className={style.container}>
            <div className={style.containerImg}>
                <img className={style.img} src={foto} alt="foto de uma modelo" />
                <div className={style.text}>
                    <h1>Bem-vinda!</h1>
                    <p>Aqui, cada detalhe foi pensado para você brilhar.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default BannerImg