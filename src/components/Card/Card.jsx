import React from 'react'
import style from './Card.module.scss'
import card1 from '../../assets/collection-img/card1.png'
import card2 from '../../assets/collection-img/card2.png'
import card3 from '../../assets/collection-img/card3.png'



const Card = () => {
  return (
    <>
        <section className={style.card}>
            <div className={style.cardItem}>
                <div className={style.cardImg}>
                    <img src={card1} alt="conjuntos" />
                    <div className={style.cardText}>
                        <h2>CONJUNTOS</h2>
                    </div>
                </div>
            </div>
            <div className={style.cardItem}>
                <div className={style.cardImg}>
                    <img src={card2} alt="Vestido" />
                    <div className={style.cardText}>
                            <h2>CONJUNTOS</h2>
                    </div>
                </div>
            </div>
            <div className={style.cardItem}>
                <div className={style.cardImg}>
                    <img src={card3} alt="Vestidos" />
                    <div className={style.cardText}>
                        <h2>CONJUNTOS</h2>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Card