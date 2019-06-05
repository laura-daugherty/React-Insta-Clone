import React from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/authentication/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

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

export default App;
