import React from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'



class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      datas: dummyData,
    }
  };
  render() {
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
