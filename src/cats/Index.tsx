import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectionForm from '../components/SelectionForm';
import CatImage from '../components/CatImage';
import ActionRow from '../components/ActionRow';
import { Breed, CatDetails } from '../interfaces';

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
            <SelectionForm wasChanged={this.onSelectBreed} selectedBreed={this.state.selectedBreed} breeds={this.state.breeds} />
          </Col>
        </Row>
        <Row>
          { (this.state.cats.length > 0) ?
          this.state.cats.map((cat: CatDetails) => (
            <CatImage catDetails={ cat } key={cat.id} />)
          ) : <Col>No cats available</Col> }
        </Row>
        { this.state.canLoadMore ?
          <ActionRow
            isLoading={this.state.isLoading}
            isDisabled={this.state.cats.length === 0}
            wasClicked={() => this.populateCats(this.state.selectedBreed)}
          /> : null
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
