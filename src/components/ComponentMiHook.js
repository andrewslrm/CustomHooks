import React from 'react';
import { usePosts } from '../hooks';


  const ComponentMiHook = () => {
    const [loading, posts] = usePosts()
  
    return (
      <div>
        { loading && <p>Cargando...</p> }
        { posts.length > 0 && (<ul>
        { posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>)}
      </div>
    )
  }

  export default ComponentMiHook;