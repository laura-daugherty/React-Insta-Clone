import React from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'



class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      datas: [],
    }
    console.log('construction')
  };

  componentDidMount() {
    this.setState ({
      datas: dummyData,
    })
    console.log('didMount')
  }
  
  render() {
    console.log('did render')
    return (
      <div className="App">
        <SearchBar  />
        <PostContainer 
          datas={this.state.datas}  
        />
      </div>
    );
  }
}

export default App;
