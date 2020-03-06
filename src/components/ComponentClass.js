import React from'react';

export default class ComponentClass extends React.Component {

    state = {
      loading: true,
      posts: []
    }
  
    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        this.setState({ loading: false, posts })
    }
  
    componentWillUnmount() {
      console.log('componente se quitara');
    }
  
    UNSAFE_componentWillUpdate() {
      console.log('Se actualizo algo en el componente');
    }
  
    render() {
      return (
        <div>
          { this.state.loading && <p>Cargando...</p> }
          { this.state.posts.length > 0 && (<ul>
          { this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
          </ul>)}
        </div>
      )
    }
}