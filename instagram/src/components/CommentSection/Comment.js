import React from "react"
import PropTypes from "prop-types";

function Comment(props) {
  console.log(props)
  return (
    <div>
      <form>
        Comment:  
        <input type="text"  />
      </form>
      <div>
        {props.comments.map(comment => {
          return (
            comment.text
          )
        })}
      </div>
    </div>
  )
}

Comment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default Comment


