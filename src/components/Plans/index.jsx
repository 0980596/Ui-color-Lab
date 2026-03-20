import { CircleCheck } from "lucide-react";
import style from "./style.module.css";

export default function Plans() {

    const plans = [
        {
            typePlan: "Free",
            descType: "Recursos básicos para começar",
            price: "0",
            desc: [
                "Teste cores para sua interface",
                "Visualizar cores em tempo real com preview",
                "Modo claro e escuro",
                "Acesso limitado a paletas de cores predefinidas"
            ]
        },
        {
            typePlan: "Pro",
            descType: "Recursos avançados para designers",
            price: "9.99",
            desc: [
                "Exportar paleta em CSS e JSON",
                "Salvar paletas favoritas",
                "Modo escuro automático baseado nas cores",
                "Acesso completo a todas as paletas disponíveis"
            ]
        },
        {
            typePlan: "Enterprise",
            descType: "Para equipes e projetos grandes",
            price: "5.50",
            desc: [
                "Todos os recursos Pro sem limitações",
                "Paletas ilimitadas para criar",
                "Suporte com resposta rápida",
                "Integração com Figma e outras ferramentas de design"
            ]
        }
    ];

    return (
        <>
            <div className={style.container}>
                <div className={style.textglobal}>
                    <h2>Escolha seu plano</h2>
                    <p>Obtenha recursos avançados para criar paletas de cores perfeitas</p>
                </div>
                
                <div className={style.pricing}>

                    <div className={style.btnmes}>
                        <button>mensal</button>
                    </div>

                    <div className={style.btnano}>
                        <button>anual</button>
                    </div>

                </div>
                <div className={style.cards}>
                    {plans.map((plan, index) => (
                        <div className={style.card} key={index}>

                            <div className={style.tiposervice}>
                                <h2>{plan.typePlan}</h2>
                                <p>{plan.descType}</p>
                            </div>

                            <div className={style.valor}>
                                <h2>$</h2>
                                <h1>{plan.price}</h1>
                            </div>

                            <button>começar</button>

                            <div className={style.descservice}>
                                {plan.desc.map((item, i) => (
                                    <div key={i}>
                                        <div className={style.des}>
                                            <CircleCheck />
                                            <p>{item}</p>
                                        </div>
                                        {i < plan.desc.length - 1 && <hr />}
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}