import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    }
  }

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    })
    this.props.filterData(event.target.value)
  }

  render() {
    return (
      <div className="searchBar">
        <div className="cameraLogo">
          <img className="camera"src="https://img.icons8.com/metro/26/000000/instagram-new.png" alt="Instagram Logo"  />
          Instagram
        </div>
        <form className="searchInput">
          Search!
          <input 
            type="text" 
            placeholder="search"
            onChange={this.onChangeSearchInput}
            value={this.state.searchInput}
          />
        </form>
        <div className="doodads">
          <img src="https://img.icons8.com/android/24/000000/compass.png"/>
          <img className="heart"src="https://img.icons8.com/metro/26/000000/like.png"/>
          <img src="https://img.icons8.com/small/24/000000/user.png"/>
        </div>
      </div>
    )
  }
}

export default SearchBar