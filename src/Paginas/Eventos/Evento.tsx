import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import style from "./Evento.module.css"

import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Evento() {


  return (
    <>
      <Header />
      <div className={style.container}>
        <h2>Eventos</h2>

        <div className={style.MenuBox}>

          <div className={style.box}>
            <img src="https://picsum.photos/800/400?random=1" alt="Imagem do Evento" />
            <a
              href="https://www.youtube.com/channel/UCNF1rBAT8a-NNQLE1F1KwJw"
              target="_blank"
              rel="noopener noreferrer"><YouTubeIcon />Youtube</a>
            <label>Descrição do Evento:</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi
              error distinctio ea. Unde doloremque maiores, animi adipisci officia assumenda
              repudiandae fugit dicta nisi consectetur eius numquam vitae, labore tenetur!</p>
          </div>

          <div className={style.box}>
            <img src="https://picsum.photos/800/400?random=2" alt="Imagem do Evento" />
            <a
              href="https://www.youtube.com/channel/UCNF1rBAT8a-NNQLE1F1KwJw"
              target="_blank"
              rel="noopener noreferrer"><YouTubeIcon />Youtube</a>
            <label>Descrição do Evento:</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi
              error distinctio ea. Unde doloremque maiores, animi adipisci officia assumenda
              repudiandae fugit dicta nisi consectetur eius numquam vitae, labore tenetur!</p>
          </div>

          <div className={style.box}>
            <img src="https://picsum.photos/800/400?random=3" alt="Imagem do Evento" />
            <a
              href="https://www.youtube.com/channel/UCNF1rBAT8a-NNQLE1F1KwJw"
              target="_blank"
              rel="noopener noreferrer"><YouTubeIcon />Youtube</a>
            <label>Descrição do Evento:</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi
              error distinctio ea. Unde doloremque maiores, animi adipisci officia assumenda
              repudiandae fugit dicta nisi consectetur eius numquam vitae, labore tenetur!</p>
          </div>

          <div className={style.box}>
            <img src="https://picsum.photos/800/400?random=3" alt="Imagem do Evento" />
            <a
              href="https://www.youtube.com/channel/UCNF1rBAT8a-NNQLE1F1KwJw"
              target="_blank"
              rel="noopener noreferrer"><YouTubeIcon />Youtube</a>
            <label>Descrição do Evento:</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi
              error distinctio ea. Unde doloremque maiores, animi adipisci officia assumenda
              repudiandae fugit dicta nisi consectetur eius numquam vitae, labore tenetur!</p>
          </div>

        </div>
      </div>

      <br />
      <Footer />
    </>
  )
}
