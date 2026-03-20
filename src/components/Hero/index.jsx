import style from "./style.module.css";

export default function Hero() {
    return (
        <div className={style.container}>
            <div className={style.herosection}>
                <div className={style.toptag}>
                    Creating experiences that matter!
                </div>

                <div className={style.headlinewrapper}>
                    <h1>
                        Designing<br />
                        Products That<br />
                        Scale
                    </h1>

                    <div className={style.badge + " " + style.ecommerce}>Ecommerce</div>
                    <div className={style.badge + " " + style.foodtech}>Foodtech</div>
                    <div className={style.badge + " " + style.user}>Pedro</div>
                    <div className={style.badge + " " + style.fintech}>Fintech</div>
                </div>

                <div className={style.tittledescloja}>
                    <p>
                        Escolha e visualize cores para textos, botões e elementos visuais da sua interface
                    </p>
                </div>
            </div>
        </div>
    )
}