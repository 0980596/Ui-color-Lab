import { ChevronDown, ChevronUp } from "lucide-react";
import style from "./style.module.css";
import { useState } from "react";

export default function Faq() {

    const [abrir, setabrir] = useState(0);

    const faq = [
        {
            number: "01",
            tittle: "Quantas cores devo usar?",
            desc: "Normalmente, 3 cores são suficientes (fundo, texto e uma cor de destaque)."
        },
        {
            number: "02",
            tittle: "Como funciona a ferramenta?",
            desc: "Selecione as cores desejadas para cada elemento da interface e visualize em tempo real como ficam juntos."
        },
        {
            number: "03",
            tittle: "Posso usar as cores em meus projetos?",
            desc: "Sim! Você pode usar as cores geradas aqui da forma que preferir, são livres para uso."
        },
        {
            number: "04",
            tittle: "Como aprender mais sobre cores?",
            desc: "Você pode encontrar mais informações sobre teoria de cores."
        },
        {
            number: "05",
            tittle: "O que é contraste de cores?",
            desc: "O contraste é a diferença de luminosidade entre cores. Cores com alto contraste são mais fáceis de ler."
        }
    ]

    return (
        <>
            <div className={style.space}>

                <div className={style.container}>

                    <div className={style.tittle}>
                        <h2>faq</h2>
                        <p>Respostas para algumas perguntas frequentes.</p>
                    </div>

                    <div className={style.containerfaq}>

                        {faq.map((faq, index) => (
                            <div className={style.faq} key={index} onClick={() => setabrir(index)}>

                                <div className={style.tittlecontainer}>
                                    <div className={style.faqcontainer}>
                                        <span>{faq.number}</span>
                                        <h2>{faq.tittle}</h2>
                                    </div>
                                    <div className={style.arrow}>
                                        {abrir === index ? <ChevronDown /> : <ChevronUp />}
                                    </div>
                                </div>

                                {abrir === index && (
                                    <p>{faq.desc}</p>
                                )}

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </>
    )
}