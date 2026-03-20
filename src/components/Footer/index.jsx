import style from "./style.module.css";

import logo from "../../images/logo.png";

export default function Footer() {
    return (
        <>
            <div className={style.space}>
                <div className={style.container}>

                    <footer>

                        <div className={style.logo}>
                            <img src={logo} alt="" />
                            <h2>Pedro Amancio</h2>
                        </div>

                        <div className={style.cols}>

                            <div className={style.col}>
                                <h2>sobre</h2>
                                <p>Ferramenta para escolher cores para interfaces limpas e agradáveis.</p>
                            </div>

                            <div className={style.col}>
                                <h2>explorar</h2>
                                <a href="/docs">Docs</a>
                                <a href="/blog">Blog post template</a>
                                <a href="/game">Color Game</a>
                            </div>

                            <div className={style.col}>
                                <h2>contato</h2>
                                <a href="https://github.com/0980596" target="_blank" rel="noreferrer">GitHub</a>
                                <a href="https://www.linkedin.com/in/pedro-am%C3%A2ncio-6bb579378/" target="_blank" rel="noreferrer">Linkedin</a>
                                <a href="https://portf-lio-nu-swart.vercel.app/" target="_blank" rel="noreferrer">Portifolio</a>
                            </div>

                        </div>

                    </footer>

                    <div className={style.creator}>
                        <span>Criado por Pedro Amancio</span>
                    </div>

                </div>
            </div>
        </>
    )
}