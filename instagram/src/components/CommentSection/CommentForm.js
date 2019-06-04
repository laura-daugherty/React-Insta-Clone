import React from "react"

class CommentForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      newComment:""
    }
  }

  onClickButton = (event) => {
    event.preventDefault();
    console.log("onClickButton")
    console.log(this.state.newComment)
    this.props.addNewComment(this.state.newComment, 1);
  }


  onChangeComment = (event) => {
    this.setState({
      newComment: event.target.value
    })
  }

  // onSubmit = () => {
  //   this.addNewComment
  // }

  render () {
    return (
      <form>
        Comment:  
        <input 
          placeholder="Comment"
          onChange={this.onChangeComment}
          value={this.state.newComment}
          name="NAME"
        />
        <button onClick={this.onClickButton}>Add Comment</button>
      </form>
    )
  } 
}


  export default CommentForm

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     comments: props.comments
  //   }
  // }

  //   onInputChange = (event) => {
  //       this.setState({
  //           [event.target.name]: event.target.value})
  //   }

  // placeholder="Todo Item" 
  // onChange={this.onInputChange} 
  // value={this.state.taskName}
  // name="taskName"