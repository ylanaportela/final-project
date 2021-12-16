import Menu from "../../components/Menu/Menu"
import "./home.css"

import Image from '../../assets/Internet.svg' 



const Home = () => {
    return (
        <>
            <Menu />
            <section className="container home">

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

                    <div className="today-title">
                        <div>A História da Internet</div>
                    </div>

                    <div className="today-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sapien bibendum, fermentum dui id, laoreet ex.a</p>
                    </div>

                    <div className="today-link">
                        <a>SAIBA MAIS</a>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Home