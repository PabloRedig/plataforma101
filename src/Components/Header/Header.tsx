import React from 'react'
import style from "./Header.module.css"

export default function Header() {
    return (
        <>
            <div className={style.container}>
                <div className={style.img}>
                    <img src="" alt="LogoPlataforma" />
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
