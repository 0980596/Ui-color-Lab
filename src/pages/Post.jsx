import Header from "../components/Header";
import Option from "../components/Option";
import Footer from "../components/Footer";

import style from "../styles/post.module.css";

export default function Post() {
    return (
        <>
            <Header />
            <Option />

            <div className={style.space}>

                <div className={style.container}>

                    <div className={style.gra}>
                    </div>

                    <div className={style.intro}>
                        <h1>Lorem consectetur adipisicing elit.</h1>

                        <h2>Amet, nisi cumque nulla ratione autem quod possimus.</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione libero recusandae explicabo, repellendus rerum assumenda tempore sit quaerat ipsum maxime et dignissimos minus tempora nulla earum iusto esse tenetur?</p>
                    </div>

                    <div className={style.des}>
                        <h2>Nam beatae molestias aperiam laboreasperiores.</h2>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repudiandae dolor natus. Ex asperiores, quis aperiam ab officiis reiciendis obcaecati cumque qui nulla, quia laborum voluptas hic aliquid! Odio, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi voluptatum doloribus eius necessitatibus.</p>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolor, neque ullam sunt accusamus amet molestias vitae deleniti, nam maxime aut similique magnam, aliquam officia fuga nostrum voluptatem ducimus cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos accusamus, totam perspiciatis consequuntur quasi placeat ab. Repellat fugit impedit porro libero atque obcaecati animi omnis commodi facilis reprehenderit! Perferendis, in!</p>
                    </div>

                    <div className={style.list}>

                        <h2>Adipisicing eli rem impedit ex iure quasi eveniet voluptas!</h2>

                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum quis orci eget faucibus. Maecenas mattis fringilla elementum. Proin quis.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar massa et orci vulputate, quis maximus.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet fringilla orci ac eleifend. Fusce ut.</li>
                        </ul>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam recusandae animi perspiciatis assumenda expedita voluptate voluptas, ab fuga? Minima rerum nihil eum.</p>
                    </div>

                    <div className={style.destwo}>

                        <h2>Vero consequatur qui reprehenderit ad magni iure alias culpa aut officiis.</h2>

                        <p>Praesentium consectetur, nemo culpa ullam omnis architecto quam ad delectus deleniti est sed dicta reprehenderit molestiae esse. Id nihil fugiat nostrum provident.</p>

                        <p>Saepe obcaecati iste ullam? Sequi corrupti excepturi consequuntur voluptas soluta autem maiores accusantium vel magnam numquam nihil officiis eos optio, saepe necessitatibus?</p>

                        <p>Quam eveniet laudantium consequatur quidem dolore. Non eius tempore nesciunt, error iste consectetur, quod architecto placeat vel ea atque ipsam! Iusto, aut.</p>

                    </div>


                    <div className={style.list}>

                        <h2>Adipisicing eli rem impedit ex iure quasi eveniet voluptas!</h2>

                        <ol>
                            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum quis orci eget faucibus. Maecenas mattis fringilla elementum. Proin quis.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar massa et orci vulputate, quis maximus.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet fringilla orci ac eleifend. Fusce ut.</li>
                        </ol>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam recusandae animi perspiciatis assumenda expedita voluptate voluptas, ab fuga? Minima rerum nihil eum.</p>

                        <p>Aperiam eaque neque voluptate quae voluptatum harum officiis temporibus exercitationem nesciunt ab corporis ut cumque magnam, dolores minima nulla iure quo possimus. </p>
                    </div>



                </div>

            </div>

            <Footer />

        </>
    )
}