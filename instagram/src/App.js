import React from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
