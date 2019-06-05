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
    // console.log('construction')
  };

  componentDidMount() {
    this.setState ({
      datas: dummyData,
    })
    // console.log('didMount')
  }
  
  //function to filter datas with an argument
  filterData = (searchInput) => {
    console.log("I love you mama boo bear")
    console.log(searchInput)
    //props.datas.filter() data => this.prevState.searchInput === props.datas.username)
    this.setState({
      datas: dummyData.filter((data) => {
        console.log("inside setSTATE")
        console.log(data)
        console.log(data.username)
        return (
          data.username.includes(searchInput)
        )
      })
    })
  }

  render() {
    // console.log('did render')
    return (
      <div className="App">
        <SearchBar  
          datas={this.state.datas}
          filterData={this.filterData}
        />
        <PostContainer 
          datas={this.state.datas}  
        />
      </div>
    );
  }
}

export default App;
