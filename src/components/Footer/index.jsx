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
                                <p>Visualize your color choices.</p>
                                <a href=""></a>
                            </div>

                            <div className={style.col}>
                                <h2>explorar</h2>
                                <a href="">Docs</a>
                                <a href="">Blog post template</a>
                                <a href="">Color Game</a>
                            </div>

                            <div className={style.col}>
                                <h2>contato</h2>
                                <a href="https://github.com/0980596" target="_blank">GitHub</a>
                                <a href="https://www.linkedin.com/in/pedro-am%C3%A2ncio-6bb579378/" target="_blank">Linkedin</a>
                                <a href="https://portf-lio-nu-swart.vercel.app/" target="_blank">Portifolio</a>
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