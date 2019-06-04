import React from "react"

function UsernamePic(props) {
  return (
    <div>
      <img className="thumbNail" src={props.thumbNail}  />
    </div>
  )
}

export default UsernamePic