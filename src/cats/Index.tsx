import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

interface Breed {
  id: string;
  name: string;
  origin: string;
  description: string;
  temperament: string;
}

interface CatDetails {
  id: string;
  url: string;
  breeds: Array<Breed>
}

interface Props {}

interface State {
  breeds: Array<Breed>
  selectedBreed: string
  cats: Array<CatDetails>,
  page: number,
  isLoading: boolean,
  canLoadMore: boolean
}

export default class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      breeds: [],
      selectedBreed: 'DEFAULT',
      cats: [],
      page: 0,
      isLoading: true,
      canLoadMore: true
    };
  }
  populateCats = (breed_id: string) => {
    this.setState(
      { selectedBreed: breed_id, page: this.state.page + 1, isLoading: true },
      () => {
        const options = {
          headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY },
          params: { breed_id: this.state.selectedBreed, order: 'asc', limit: 5, page: this.state.page }
        };
        console.log(options);
        axios.get('https://api.thecatapi.com/v1/images/search', options)
          .then((response) => {
            this.setState({ cats: [...this.state.cats, ...response.data], isLoading: false, canLoadMore: response.data.length !== 0 });
          });
      }
    );
  }
  onSelectBreed = (event: React.ChangeEvent<any>) => {
    const breed_id = event.target.value;
    this.setState(
      { cats: [], page: 0 },
      () => {
        this.populateCats(breed_id);
      }
    );
  }
  render() {
    return (
      <Container>
        <Row>
          <Col><h1>Cat Browser</h1></Col>
        </Row>
        <Row>
          <Col md={{ span: 3 }} sm={{ span: 6 }}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Breed</Form.Label>
                <Form.Control as="select" custom onChange={this.onSelectBreed} value={ this.state.selectedBreed}>
                  <option value="DEFAULT" disabled>Select breed</option>
                  {this.state.breeds.map((breed: Breed) => (
                    <option key={breed.id} value={breed.id}>{breed.name}</option>
                  ))} 
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          { (this.state.cats.length > 0) ?
            this.state.cats.map((cat: CatDetails) => (
            <Col md={{ span: 3 }} sm={{ span: 6}} key={cat.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cat.url} />
                <Card.Body>
                  <Link to={ "/" + cat.id } className="btn btn-primary btn-block">View details</Link>
                </Card.Body>
              </Card>
            </Col>
            )) : <Col>No cats available</Col>
          }
        </Row>
        { this.state.canLoadMore ?
        <Row>
          <Col>
            <Button
              variant="success"
              onClick={() => this.populateCats(this.state.selectedBreed) }
              disabled={this.state.isLoading || this.state.cats.length === 0}
            >
              {this.state.isLoading ? 'Loading cats…' : 'Load more'}
            </Button>{' '}
          </Col>
        </Row> : null
        }
      </Container>
    );
  }

  componentDidMount() {
    const options = {
      headers: {'x-api-key': process.env.REACT_APP_CAT_API_KEY}
    };
    axios.get('https://api.thecatapi.com/v1/breeds', options)
      .then((response) => {
        this.setState({ breeds: response.data, isLoading: false });
      });
  }
}
