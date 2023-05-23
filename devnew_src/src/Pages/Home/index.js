import {Link} from 'react-router-dom';
import "./Home.css"

function Home() {
    return (
        <body>
            <main className="home">
            <section className="apresentacao">
                <section className="home_conteudo">
                    <h1 className="home_conteudo_titulo">
                    Eleve seu sonho ao <strong className="titulo_destaque">máximo</strong>
                    </h1>
                    <p className="home_conteudo_texto">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus hic consectetur exercitationem, natus corporis, maiores voluptates esse autem architecto, eius veniam error reiciendis odio quae cumque voluptatem mollitia repellendus obcaecati?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatem pariatur ea. Deserunt rerum fuga at? Nam placeat facere enim accusamus sapiente officiis? Voluptatem, iure. Necessitatibus ea pariatur tempora reiciendis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem blanditiis itaque, aut facere mollitia doloremque optio! Ex nobis minima cumque sequi enim neque nostrum harum, praesentium nisi voluptates accusantium?
                    </p>
                </section>
                <img class="image" src="./images/66200936_1518208168353492_3105663866458079232_o.jpg"/>
            </section>
            </main>
            
        </body>

        
    )
}

export default Home;