import React from 'react'
import style from "./Home.module.css"
import Carousel from "../Carrossel/Carousel";

import logoPlataforma101 from "../../assets/Logo Plataforma 101.png"

export default function Home() {

  const carouselItems = [
    { src: "https://picsum.photos/800/400?random=1", title: "Imagem 1" },
    { src: "https://picsum.photos/800/400?random=2", title: "Imagem 2" },
    { src: "https://picsum.photos/800/400?random=3", title: "Imagem 3" },
    { src: "https://picsum.photos/800/400?random=4", title: "Imagem 4" }, 
    { src: "https://picsum.photos/800/400?random=5", title: "Imagem 5" },  
    { src: "https://picsum.photos/800/400?random=6", title: "Imagem 6" },  
    { src: "https://picsum.photos/800/400?random=7", title: "Imagem 7" },  
    { src: "https://picsum.photos/800/400?random=8", title: "Imagem 8" },
  ];

  return (
    <>
      <div className={style.container}>
        <div className={style.fotoNome}>
          <div className={style.foto}>
            <img src={logoPlataforma101} alt="" />
          </div>
          <h1>Plataforma 101</h1>
        </div>

        <Carousel items={carouselItems} />
      </div>

    </>
  )
}
