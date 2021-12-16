import {useState, useEffect} from "react"
import Axios from "axios"


const Others = () => {
    const [posts, setPosts] = useState([])

    useEffect (() => {

        async function getDados(){
            const response = await Axios.get('http://localhost:5000/posts')
            const data = response.data
            setPosts(data)
        }

        getDados()
      
    }, [])

    return(

        <section className="container-others">

            <div className="container-title">
                <h2>Outras Publicações</h2>
            </div>
            
            <div className="posts">
            
                {
                posts.map(post => 
                    <div key={post.id}>{post.title}</div>
                )}
            </div>

        </section>
    )
}

export default Others