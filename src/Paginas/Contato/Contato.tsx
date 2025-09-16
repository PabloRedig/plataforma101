import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import style from "./Contato.module.css"
export default function Contato() {
  return (
    <>
      <Header />

      <div className={style.contato}>
        <a
          href="https://www.instagram.com/bandaplataforma101"
          target="_blank"
          rel="noopener noreferrer"> <InstagramIcon />Instagram</a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"> <WhatsAppIcon />Whatsapp</a>
      </div>

      <Footer />
    </>
  )
}
