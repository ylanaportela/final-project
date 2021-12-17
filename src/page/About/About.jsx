import ImageEu from "../../assets/eu.JPG"
import { FiFacebook, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi'
import "./about.css"

const About = () => {
    return (
        <>
            <section className="container-about"  id="sobre">
            <div className="about-title">
                        <h2>Sobre Mim</h2>
                    </div>
                <div className="about-me">
                   
                    <div className="about-text">

                        <h3>"Hello World!!"</h3>
                        <p>Me chamo Ylana, tenho 21 anos, moro em Feira de Santana, Bahia. Faço Licenciatura em História na UEFS, recentemente eu me voltei a pesquisar mais sobre tecnologia.
                        Sempre partir do ponto da história para compreender o mundo e com a tecnologia não foi diferente.
                        Comecei a estudar programação 
                        fazendo uma oficina de Python na minha universidade, desde então tenho me voltado cada vez mais ao Desenvolvimento de Software, porém focando mais na Web.</p>
                        <p>
                        Me fascino cada vez mais por tecnologia, de quantas coisas novas podem ser criadas do 0 e como isso influencia ativamente na vida de outras pessoas, meu objetivo atual é dar continuidade aos meus estudos e ingressar no mercado de trabalho e me especializar na área enquanto Desenvolvedora FrontEnd</p>
                    </div>
                    <div className="about-image">
                        <img src={ImageEu} alt="Minha foto" />
                    </div>
                </div>

                <div className="social-medias">
                    <a href="https://www.facebook.com/ylana.adorno/" target= "_blank" rel="noreferrer">
                        <div className="cards">
                            <FiFacebook size={50} color="#f2f2f2"/>
                            <p>Facebook</p>
                            <p>Ylana Adorno</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ylana-portela/" target= "_blank" rel="noreferrer">
                        <div className="cards">
                            <FiLinkedin size={50} color="#f2f2f2"/>
                            <p>Linkedin</p>
                            <p>Ylana Portela</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/_ylanaportela/" target= "_blank" rel="noreferrer">
                        <div className="cards">
                            <FiInstagram size={50} color="#f2f2f2"/>
                            <p>Instagram</p>
                            <p>@ylanaportela</p>
                        </div>
                    </a>
                    <a href="https://github.com/ylanaportela" target= "_blank" rel="noreferrer">
                        <div className="cards">
                            <FiGithub size={50} color="#f2f2f2"/>
                            <p>GitHub</p>
                            <p>_ylanaportela</p>
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}

export default About