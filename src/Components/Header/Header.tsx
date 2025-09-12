import style from "./Header.module.css"
import logoPlataforma101 from "../../assets/Logo Plataforma 101.png"
export default function Header() {
    return (
        <>
            <div className={style.container}>
                <div className={style.img}>
                    <img src={logoPlataforma101} alt="LogoPlataforma" />
                </div>
                <ul className={style.menu}>
                    <li> Contato </li>
                    <li> Integrantes </li>
                    <li> Eventos </li>
                </ul>

            </div>
        </>
    )
}
