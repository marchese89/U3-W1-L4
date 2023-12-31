import { Component } from "react";
import CommentList from "./CommentsList";
import AddComment from "./AddComment";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    listOfComments: [],
    error: false,
  };
  componentDidMount() {
    this.getComments();
  }

  getComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGFkZmY2ZTNkZDAwMTQ5NWU0MzMiLCJpYXQiOjE2OTgzMTkwNzEsImV4cCI6MTY5OTUyODY3MX0.6OiHMcwB71-jL1waCDYllDV5ONJ4nMJocBRyTYVP518",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({
          listOfComments: data,
        });
      }
    } catch (err) {
      console.log("ERRORE", err);
      this.setState({ error: true });
    }
  };
  render() {
    return (
      <>
        {this.state.error && <Error />}
        <CommentList
          listOfComments={this.state.listOfComments}
          update={this.getComments}
          commentArea={this}
        />
        <AddComment
          id={this.props.id}
          update={this.getComments}
          commentArea={this}
        />
      </>
    );
  }
}

export default CommentArea;
