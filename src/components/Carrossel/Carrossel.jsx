import React from "react";
import style from './Carrossel.module.scss'
const Carrossel = () => {
  return (
    <>
      <section className={style.highlights}>
        <div className={style.highlight}>
          <h3>✨ Looks Exclusivos</h3>
          <p>
            Peças selecionadas para realçar sua beleza com muito estilo e
            elegância.
          </p>
        </div>
        <div className={style.highlight}>
          <h3>🚚 Entrega Ágil</h3>
          <p>Receba suas compras via Uber Flash, com conforto e segurança.</p>
        </div>
        <div className={style.highlight}>
          <h3>💎 Atendimento VIP</h3>
          <p>
            Fale direto com a loja via WhatsApp e tire todas as dúvidas com
            agilidade.
          </p>
        </div>
      </section>
    </>
  );
};

export default Carrossel;
