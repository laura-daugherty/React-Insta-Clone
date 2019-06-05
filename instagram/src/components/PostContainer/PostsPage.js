import React from "react"
import PostContainer from '/Users/lauradaugherty/Lambda Projects/React-Insta-Clone/instagram/src/components/PostContainer/PostContainer.js'
import SearchBar from '/Users/lauradaugherty/Lambda Projects/React-Insta-Clone/instagram/src/components/SearchBar/SearchBar.js'
import dummyData from '/Users/lauradaugherty/Lambda Projects/React-Insta-Clone/instagram/src/dummy-data.js'

class PostPage extends React.Component {
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
    return (
      <div>
        <SearchBar  
          datas={this.state.datas}
          filterData={this.filterData}
        />
        <PostContainer 
          datas={this.state.datas}  
        />
      </div>
    )
  }
}

export default PostPage