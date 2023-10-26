import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
class SingleComment extends Component {
  render() {
    return (
      <ListGroup.Item className="d-flex justify-content-between">
        <div>
          {this.props.comment.comment} - voto: {this.props.comment.rate}
        </div>
        <Button
          variant="danger"
          onClick={async () => {
            try {
              const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" +
                  this.props.comment._id,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGFkZmY2ZTNkZDAwMTQ5NWU0MzMiLCJpYXQiOjE2OTgzMTkwNzEsImV4cCI6MTY5OTUyODY3MX0.6OiHMcwB71-jL1waCDYllDV5ONJ4nMJocBRyTYVP518",
                  },
                  method: "DELETE",
                }
              );
              if (response.ok) {
                this.props.update();
              }
            } catch (err) {
              console.log("ERRORE", err);
            }
          }}
        >
          <Trash3Fill />
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
