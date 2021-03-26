import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

interface Props {
  isLoading: boolean;
  isDisabled: boolean;
  wasClicked: () => void;
}

export default class ActionRow extends Component<Props> {
  render() {
    return (
      <Row>
        <Col>
          <Button
            variant="success"
            disabled={this.props.isLoading || this.props.isDisabled}
            onClick={this.props.wasClicked}
            className="mt-3"
          >
            {this.props.isLoading ? "Loading cats…" : "Load more"}
          </Button>{" "}
        </Col>
      </Row>
    );
  }
}
