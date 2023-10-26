import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        <h4 className="text-center">Commenti</h4>
        {this.props.listOfComments.map((comment, i) => {
          return <SingleComment comment={comment} key={i} />;
        })}
      </ListGroup>
    );
  }
}

export default CommentList;
