import React from "react"

function UsernamePic(props) {
  console.log("ICON")
  return (
    <div className="usernamePic">
      <img className="thumbNail" src={props.thumbNail}  />
      <p className="username">
        {props.username}
      </p>
    </div>
  )
}

export default UsernamePic