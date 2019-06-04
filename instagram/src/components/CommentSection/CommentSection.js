
import React from "react"
import Comment from "./Comment.js"
import PropTypes from "prop-types";
import CommentForm from "./CommentForm"
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    }
  }

  addNewComment = (text, index) => {
    const newComment = {
      id: index,
      username: "placeholder",
      text: text
    }
    console.log(newComment)
    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment]
      } 
    })
  }

  render() {
    console.log(this.state.comments)
    return (
      <div>
        <Comment  
          comments={this.state.comments}
        />
        <CommentForm  
          comments={this.state.comments}
          addNewComment={this.addNewComment}
        />
      </div>
    )
  }
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
