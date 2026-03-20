import style from "./style.module.css";

export default function Highlights() {

    const infcard = [
        {
            name: "50+",
            desc: "Paletas criadas"
        },
        {
            name: "100+",
            desc: "Cores testadas"
        },
        {
            name: "20+",
            desc: "Elementos estilizados"
        },
        {
            name: "10+",
            desc: "Interfaces combinadas"
        },
        {
            name: "10+",
            desc: "Qualified both rounds at IIT Madras. DSA, coding, maths, and reasoning against school and college students."
        },
        {
            name: "3rd Global",
            desc: "Venci o Lumi Hackathon. Fiquei em 3º lugar globalmente e recebi US$ 200 em prêmios em dinheiro."
        },
    ]

    return (
        <>
            <div className={style.containerhig}>
                <div className={style.highlightsC}>

                    <div className={style.highlightstittle}>
                        <span>06</span>
                        <h2>destaques</h2>
                    </div>

                    <div className={style.highlightsGrid}>
                        {infcard.map((inf, index) => (
                            <div className={style.cardHighlights}>
                                <h2>{inf.name}</h2>
                                <span>{inf.desc}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    )
}