import { Component } from "react";
import { ListGroup } from "react-bootstrap";
class SingleComment extends Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.comment.comment} - voto: {this.props.comment.rate}
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
