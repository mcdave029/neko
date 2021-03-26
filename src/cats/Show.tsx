import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./Show.scss";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { CatDetails } from "../interfaces";
import { connect } from "react-redux";
import axios from "axios";

interface Props {
  match: {
    params: { id: string };
  };
  cats: CatDetails[];
}

interface State {
  catDetails?: CatDetails;
}

const mapStateToProps = (state: RootState) => {
  return {
    cats: state.cat.cats,
  };
};

class Show extends Component<Props, State> {
  render() {
    return (
      <Container>
        {this.state?.catDetails != null ? (
          <Card className="mt-3 mb-3">
            <Card.Header>
              <Link to="/neko" className="btn btn-primary">
                Back
              </Link>
            </Card.Header>
            <Card.Img variant="top" src={this.state?.catDetails?.url} />
            <Card.Body>
              <Card.Title>{this.state?.catDetails?.breeds[0].name}</Card.Title>
              <h6>Origin: {this.state?.catDetails?.breeds[0].origin}</h6>
              <h6>{this.state?.catDetails?.breeds[0].temperament}</h6>
              <Card.Text>
                {this.state?.catDetails?.breeds[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <h3 className="center-fixed">Loading...</h3>
        )}
      </Container>
    );
  }

  fetchCatImage() {
    const image_id = this.props.match.params.id;
    const options = {
      headers: { "x-api-key": process.env.REACT_APP_CAT_API_KEY },
      params: { image_id: image_id },
    };
    axios
      .get("https://api.thecatapi.com/v1/images/" + image_id, options)
      .then((response) => {
        this.setState({ catDetails: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  componentDidMount() {
    const catDetails = this.props.cats.find(
      (cat) => cat.id === this.props.match.params.id
    );
    if (catDetails == null) {
      this.fetchCatImage();
    } else {
      this.setState({ catDetails: catDetails });
    }
  }
}

export default connect(mapStateToProps)(Show);
