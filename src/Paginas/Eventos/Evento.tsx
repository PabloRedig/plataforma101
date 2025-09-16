import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import style from "./Evento.module.css"

export default function Evento() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h3>Eventos</h3>
        
        <div className={style.MenuBox}>
        
          <div className={style.box}>
            <img src="" alt="Imagem do Evento" />
            <a href="">Link Youtube</a>
            <label>Descrição do Evento:</label>
            <p>Um pouco sobre o Evento</p>
          </div>

          <div className={style.box}>
            <img src="" alt="Imagem do Evento" />
            <a href="">Link Youtube</a>
            <label>Descrição do Evento:</label>
            <p>Um pouco sobre o Evento</p>
          </div>

          <div className={style.box}>
            <img src="" alt="Imagem do Evento" />
            <a href="">Link Youtube</a>
            <label>Descrição do Evento:</label>
            <p>Um pouco sobre o Evento</p>
          </div>          
        
        </div>
      </div>

      <Footer />
    </>
  )
}
