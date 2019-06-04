import React from "react"
import Image from "./Image.js"
import Icons from "./Icons.js"
import UsernamePic from "./UsernamePic.js"
import Likes from "./Likes"
function Post(props) {
  console.log("inside post")
  console.log(props)
  return (
    <div>
      <UsernamePic
        thumbNail={props.thumbNail}
        username={props.username} 
      />
      <Image 
        image={props.image} 
      />
      <Icons
        likes={props.likes}
      />
      <Likes
        likes={props.likes}
      />
    </div>
  )
}

export default Post