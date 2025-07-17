import React from 'react'
import style from './Contact.module.scss'
import instagram from '../../assets/favicon/instagram.png'
import whatsapp from '../../assets/favicon/whatsapp.png'
import localizar from '../../assets/favicon/marcador.png'

const Contact = () => {
  return (
    <div id='Contato'>

        <div className={style.containerText}>
          <h2>Fale Conosco</h2>
          <p>Entre em contato com a nossa loja de roupas feminina</p>
          <a href="https://www.instagram.com/lu.fashion.lf/" target='_blank'><img src={instagram} alt="instagram" /> <h3>Instagram</h3></a>
          <a href="https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=558589526144&text"target='_blank'><img src={whatsapp} alt="whatsapp" /><h3>WhatsApp</h3></a>
          <a href="https://www.google.com.br/maps/place/Lu+fashion+moda+feminina/@-3.8281735,-38.5516912,3a,75y,283.26h,96.8t,360r/data=!3m7!1e1!3m5!1spWZlbflkuZKANppWIJWm1Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.800171609306744%26panoid%3DpWZlbflkuZKANppWIJWm1Q%26yaw%3D283.2644906337154!7i16384!8i8192!4m6!3m5!1s0x7c74f0033f82ca5:0x54551f6b45a7415e!8m2!3d-3.8280702!4d-38.5515373!16s%2Fg%2F11ycjttcln?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D" target='_blank'><img src={localizar}  alt="localizar" /><h3>Av. I, 450 - Pref. José Walter, Fortaleza - CE.</h3></a>
        </div>
    </div>
  )
}

export default Contact