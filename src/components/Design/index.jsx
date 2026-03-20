import { useState } from "react"
import style from "./style.module.css"
import { ChevronRight } from "lucide-react";

export default function Design() {

    const infs = [
        {
            tittle: "Otimizado para velocidade e contexto",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum a neque sed bibendum. Nullam.",
            button: "Leia o blog",
            img: "https://images.ctfassets.net/8aevphvgewt8/1X8hCdEzIGRnRpav5svhdG/92c3fc244f62d6a36cd7555ec5017598/charts.webp?w=1248&fm=webp&q=90"
        },
        {
            tittle: "Próximas sugestões de edição",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum nisl ut nunc cursus mattis. Morbi.",
            button: "Veja as próximas sugestões de edição",
            img: "https://images.ctfassets.net/8aevphvgewt8/6eeNoXQVtKoJXzWBzaELx8/d995bb1c1222ecca47ae9c049ff22c3a/accept.webp?w=1248&fm=webp&q=90"
        },
        {
            tittle: "Escolha e flexibilidade de modelos",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin diam id augue consectetur.",
            button: "Conheça a seleção automática de modelos",
            img: "https://images.ctfassets.net/8aevphvgewt8/uF4VOJNKirnKvEUyyWs5w/07f2c6991c6a469768ce08c1ff8edda6/Image.webp?w=1248&fm=webp&q=90"
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className={style.containerdesign}>
                <div className={style.tittledesign}>
                    <h2>Criado para desempenho e escolha</h2>
                    <p>O Copilot oferece desempenho instantâneo e sensível ao contexto, além de proporcionar a flexibilidade</p>
                </div>
                <div className={style.infsdesign}>
                    <div className={style.textdesign}>
                        {infs.map((item, index) => (
                            <div key={index} className={style.item}>
                                <h2 onClick={() => setActiveIndex(index)} className={index === activeIndex ? style.active : ""}>
                                    {item.tittle}
                                </h2>
                                <div className={`${style.content} ${index === activeIndex ? style.open : ""}`}>
                                    <p>{item.desc}</p>
                                    <div className={style.buttondesign}>
                                        <h3>{item.button}</h3>
                                        <ChevronRight />
                                    </div>
                                </div>
                                {index < infs.length - 1 && <hr className={style.linha} />}
                            </div>
                        ))}
                    </div>
                    <div className={style.imgsedign}>
                        <img src={infs[activeIndex].img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}