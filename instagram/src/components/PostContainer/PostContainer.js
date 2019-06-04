import React from "react";
import CommentSection from '../CommentSection/CommentSection.js'
import PropTypes from "prop-types";

function PostContainer(props) {
  return (
    <div>
      {props.datas.map(data => {
        return (
          <CommentSection
            comments={data.comments}
            key={data.id}
          />
        )
      })}
    </div>
  )
}
//just check the ones I need
PostContainer.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      thumbnailUrl:PropTypes.string.isRequired,
      imageUrl:
      PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  )
}

export default PostContainer  