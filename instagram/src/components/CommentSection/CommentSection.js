
import React from "react"
import Comment from "./Comment.js"
import PropTypes from "prop-types";

function CommentSection(props) {
  return (
    <div>

      <Comment  
        comments={props.comments}
      />

      <form>
        Comment:  
        <input type="text"  />
      </form>
      
    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default CommentSection;
