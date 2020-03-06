import React, { useState, useEffect } from 'react';

const ComponentHook = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([])
  
    useEffect(() => {
      fetchPosts()
  
      return () => {
        console.log('remove from component')
      }
    }, []) // solo se ejecuta una ves al cargar
  
    useEffect(() => {
      console.log('Se actualizo algo en el componente')
    })
  
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      setLoading(false)
      setPosts(posts)
    }
  
    return (
      <div>
        { loading && <p>Cargando...</p> }
        { posts.length > 0 && (<ul>
        { posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>)}
      </div>
    )  
}

export default ComponentHook;