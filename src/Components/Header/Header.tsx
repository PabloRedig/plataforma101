import style from "./Header.module.css"
import { Navbar } from "../NavBar/Navbar"
import { NavLink } from "react-router-dom"
import LogoBanda from "../../assets/Logo Plataforma 101.png"

export default function Header() {
    return (
        <>
            <div className={style.container}>
                <NavLink to="/">
                    <div className={style.img}>
                        <img src={LogoBanda} alt="Logo Banda" />
                    </div>
                </NavLink>

                <Navbar />
            </div>
        </>
    )
}