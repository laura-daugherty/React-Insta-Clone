import React from "react"
import Likes from "./Likes.js"
import Image from "./Image.js"
import Icons from "./Icons.js"
import UsernamePic from "./UsernamePic.js"

function Post(props) {
  return (
    <div>
      <UsernamePic
        thumbNail={props.thumbNail}
        username={props.username} 
      />
      <Image 
        image={props.image} 
      />
    </div>
  )
}

export default Post