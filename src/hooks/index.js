import React, { useState, useEffect } from 'react';

export const usePosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([])
  
    useEffect(() => {
      fetchPosts()
    }, []) 
  
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      setLoading(false)
      setPosts(posts)
    }
  
    return [loading, posts]
  
}