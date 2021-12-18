import {useState, useEffect} from "react"
import Axios from "axios"
import "./others.css"



const Others = () => {
    const [posts, setPosts] = useState([])

    useEffect (() => {

        async function getDados(){

            const response = await Axios.get('https://my-json-server.typicode.com/ylanaportela/final-project/posts')
            
            const data = response.data
            setPosts(data)
        }

        getDados()
      
    }, [])

    return(

        <section className="container-others" id='others'>

            <div className="title-others">
                <h2>Outras Publicações</h2>
                <p>Aqui você tem acesso a todas publicações</p>
            </div>
            
            <div className="posts">
            
                {
                posts.map(post => 
                    <div key={post.id} className="post-card">
                        <div className="post-text">
                        <div className="post-title">{post.title }</div>
                        <p>{post.description}</p>
                        </div>
                        
                        <img className="post-image" src={post.image} alt={post.title}/>
                    </div>
                )}
            </div>

        </section>
    )
}

export default Others