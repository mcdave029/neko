import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CatDetails } from '../interfaces';

interface Props {
  catDetails: CatDetails
}

export default class CatImage extends Component<Props> {
  render() {
    return (
      <Col md={{ span: 3 }} sm={{ span: 6}}>
        <Card className="mb-3">
          <Card.Img variant="top" src={this.props.catDetails.url} />
          <Card.Body>
            <Link to={ "/" + this.props.catDetails.id } className="btn btn-primary btn-block">View details</Link>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
