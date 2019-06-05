import React from "react"
import Image from "./Image.js"
import UsernamePic from "./UsernamePic.js"


class Post extends React.Component{
  // console.log("inside post")
  // console.log(props)
  constructor (props) {
    super(props);
    this.state = {
      likes: props.likes
    }
    // console.log('construction')
  };

  onLikeClick = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }))
  }

  render() {
    return (
      <div>
        <UsernamePic
          thumbNail={this.props.thumbNail}
          username={this.props.username} 
        />
        <Image 
          image={this.props.image} 
        />
        <div>
          <img 
          onClick={this.onLikeClick}
          src="https://img.icons8.com/metro/26/000000/like.png"
          />
          <img 
          src="https://img.icons8.com/windows/24/000000/speech-bubble.png"
          />
        </div>
        <div className="likes">
          {this.state.likes}
        </div>
      </div>
    )
  }
}

export default Post