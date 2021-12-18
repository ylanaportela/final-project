import { useState, useEffect } from "react"
import Axios from "axios"

import Menu from "../../components/Menu/Menu"
import Others from "../Others/Others"
import NewsLetter from "../NewsLetter/NewsLetter"
import About from "../About/About"
import Footer from "../../components/Footer/Footer"

import "./home.css"



const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        async function getDados() {
            // const response = await Axios.get(`http://localhost:5000/posts/${8}`)
            const response = await Axios.get(`https://my-json-server.typicode.com/ylanaportela/final-project/posts/${8}`)
            const data = response.data
            setPosts(data)
        }

        getDados()

    }, [])


    return (
        <>
            <Menu />
            <section className="container home" id="home">

                <div className='box-home'>

                    <div className='container-title'>
                        <h1 className='title'>Bem Vindo ao TechLovers</h1>
                        <p className='subtitle'>O maior blog de tecnologia da História!</p>
                    </div>

                    <div className='news-title'>
                        <h3>O que temos para hoje?</h3>
                    </div>

                </div>

                {
                        <>
                            <div className="news-body today">



                                <div className="today-image" >

                                    <img src={posts.image} alt={posts.title} />

                                </div>

                                <div className="today-text">

                                    <div className="container-text">
                                        <div className="today-title">
                                            <div>{posts.title}</div>
                                        </div>

                                        <div className="today-paragraph">
                                            <p>{posts.description}</p>
                                        </div>
                                    </div>

                                    <div className="today-link">
                                        <a href="../Today/Today.jsx">SAIBA MAIS</a>
                                    </div>

                                </div>
                            </div>
                        </>
                    }

            </section>
            <Others />
            <NewsLetter />
            <About />
            <Footer />
        </>
    )
}

export default Home