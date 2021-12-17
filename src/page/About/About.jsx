import ImageEu from "../../assets/eu.JPG"
import { FiFacebook, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi'
import "./about.css"

const About = () => {
    return (
        <>
            <section className="container-about">
                <div className="about-me">
                    <div className="about-title">
                        <h2>Sobre Mim</h2>
                    </div>
                    <div className="about-text">
                        <p>Me chamo Ylana, tenho 21 anos, moro em Feira de Santana, na Bahia. Faço a graduação de Licenciatura em História na UEFS, recentemente eu me voltei a pesquisar mais sobre tecnologia, entender a história da tecnologia e saber como simples peças conectadas formam um computador despertaram a minha curiosidade, ao me aprofundar nesses estudos conheci o mundo da programação fazendo uma oficina de Python na minha universidade, desde então tenho me voltado cada vez mais ao Desenvolvimento de Software, porém focando mais na Web.<br></br>

                        Me fascino cada vez mais por tecnologia, de quantas coisas novas podem ser criadas do 0 e como isso influencia ativamente na vida de outras pessoas, meu objetivo atual é dar continuidade aos meus estudos e ingressar no mercado de trabalho em front-end. </p>
                    </div>
                    <div className="about-image">
                        <img src={ImageEu} alt="Minha foto" />
                    </div>
                </div>

                <div className="social-medias">
                    <a href="https://www.facebook.com/ylana.adorno/">
                        <div className="cards">
                            <FiFacebook size={50} color="#f2f2f2"/>
                            <p>Facebook</p>
                            <p>Ylana Adorno</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ylana-portela/">
                        <div className="cards">
                            <FiLinkedin size={50} color="#f2f2f2"/>
                            <p>Linkedin</p>
                            <p>Ylana Portela</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/_ylanaportela/">
                        <div className="cards">
                            <FiInstagram size={50} color="#f2f2f2"/>
                            <p>Instagram</p>
                            <p>@ylanaportela</p>
                        </div>
                    </a>
                    <a href="https://github.com/ylanaportela">
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