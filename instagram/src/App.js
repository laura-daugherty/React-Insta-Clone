import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/authentication/withAuthenticate'
import LoginPage from "./components/Login/LoginPage.js"


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage)

class App extends React.Component {

  render() {
    // console.log('did render')
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App
