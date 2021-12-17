import {useState, useEffect} from "react"
import Axios from "axios"

import Computer from  "../../assets/computer.svg"
import "./others.css"



const Others = () => {
    const [posts, setPosts] = useState([])

    useEffect (() => {

        async function getDados(){
            // const response = await Axios.get('https://my-json-server.typicode.com/ylanaportela/final-project/posts')
            const response = await Axios.get('https://my-json-server.typicode.com/ylanaportela/final-project/posts')
            const data = response.data
            setPosts(data)
        }

        getDados()
      
    }, [])

    return(

        <section className="container-others">

            <div className="title-others">
                <h2>Outras Publicações</h2>
                <p>Aqui você tem acesso a todas publicações</p>
            </div>
            
            <div className="posts">
            
                {
                posts.map(post => 
                    <div key={post.id} className="post-card">
                        <div className="post-title">{post.title}</div>
                        <img className="post-image" src={Computer} />
                    </div>
                )}
            </div>

        </section>
    )
}

export default Others