import React from "react"

function Image(props) {
  // console.log(props)
  return(
    <div>
      <img src={props.image} />
    </div>
  )
}

export default Image