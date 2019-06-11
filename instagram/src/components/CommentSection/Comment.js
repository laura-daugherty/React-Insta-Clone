import React from "react"
import PropTypes from "prop-types";

function Comment(props) {
  console.log(props)
  return (
    <div>
      {props.comments.map(comment => {
        return (
          <div key={comment.id} className="singleComment">
            <p>
              {comment.username}: {comment.text}
            </p>
          </div>
        )
      })}
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


