import Menu from "../../components/Menu/Menu"
import Others from "../Others/Others"
import Image from "../../assets/Internet.svg"
import "./home.css"
import NewsLetter from "../NewsLetter/NewsLetter"
import About from "../About/About"
import Footer from "../../components/Footer/Footer"



const Home = () => {
    return (
        <>
            <section className="container home">
            <Menu />

                <div className='box-home'>

                    <div className='container-title'>
                        <h1 className='title'>Bem Vindo ao TechLovers</h1>
                        <p className='subtitle'>O maior blog de tecnologia da História!</p>
                    </div>

                    <div className='news-title'>
                        <h3>O que temos para hoje?</h3>
                    </div>

                </div>


                <div className="news-body today">

                    
                       
                    <div className="today-image" >

                        <img src={Image}  />

                    </div>

                    <div className="today-text">

                        <div className="container-text"ca>
                            <div className="today-title">
                                <div>A História da Internet</div>
                            </div>

                            <div className="today-paragraph">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sapien bibendum, fermentum dui id, laoreet ex.a</p>
                            </div>
                        </div>

                        <div className="today-link">
                        <a>SAIBA MAIS</a>
                    </div>
                   
                    </div>

                    

                </div>

            </section>
            <Others id='others'/>
            <NewsLetter  id='newsletter'/>
            <About  id='about'/>
            <Footer />

        </>
    )
}

export default Home